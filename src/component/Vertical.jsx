import React from 'react';

class ScrollableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    this.autoScrollTimer = setTimeout(this.autoScroll, 3000); // Adjust the time interval as needed
    this.containerRef.current.addEventListener('mouseenter', this.handleMouseEnter);
    this.containerRef.current.addEventListener('mouseleave', this.handleMouseLeave);
  }

  componentWillUnmount() {
    clearTimeout(this.autoScrollTimer);
    this.containerRef.current.removeEventListener('mouseenter', this.handleMouseEnter);
    this.containerRef.current.removeEventListener('mouseleave', this.handleMouseLeave);
  }

  autoScroll = () => {
    if (!this.containerRef.current) return;
    this.containerRef.current.scrollBy({ top: 100, behavior: 'smooth' }); // Adjust the scroll amount as needed
    this.autoScrollTimer = setTimeout(this.autoScroll, 3000); // Adjust the time interval as needed
  };

  handleMouseEnter = () => {
    clearTimeout(this.autoScrollTimer);
  };

  handleMouseLeave = () => {
    this.autoScrollTimer = setTimeout(this.autoScroll, 3000); // Adjust the time interval as needed
  };

  render() {
    const containerStyle = {
      overflowY: 'scroll',
      height: '400px',
      border: '1px solid black',
      scrollSnapType: 'y mandatory', // Enable vertical snap scrolling
    };

    return (
      <div style={containerStyle} ref={this.containerRef}>
        {this.props.children}
      </div>
    );
  }
}

// Example usage:
class App extends React.Component {
  render() {
    const contentStyle = {
      height: '400px', // Adjust height as needed
      scrollSnapAlign: 'start', // Align content to start of the snap point
    };

    return (
      <div>
        <h1>Scrollable Container with Snap Scrolling</h1>
        <ScrollableContainer>
          {/* Components to be scrolled */}
          <div style={{ ...contentStyle, background: 'lightblue' }}>
            Content 1
          </div>
          <div style={{ ...contentStyle, background: 'lightgreen' }}>
            Content 2
          </div>
          <div style={{ ...contentStyle, background: 'lightcoral' }}>
            Content 3
          </div>
        </ScrollableContainer>
      </div>
    );
  }
}

export default App;
