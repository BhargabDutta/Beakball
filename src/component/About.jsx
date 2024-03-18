// React component
import React, { useEffect } from 'react';
import styles from "../styles/about.module.css";

const About = () => {
    useEffect(() => {
        function handleScrollAnimation() {
            const cards = document.querySelectorAll('.card__container');

            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const scrollPosition = window.innerHeight - rect.top;

                if (scrollPosition > 0 && scrollPosition < window.innerHeight) {
                    const reverseIndex = cards.length - index;
                    const duration = reverseIndex * 1000; // Convert seconds to milliseconds
                    const delay = index * 1000; // Convert seconds to milliseconds

                    card.classList.add('active');
                    card.style.paddingTop = `${reverseIndex * 4}vw`; // Adjust the padding-top value as needed
                } else {
                    card.classList.remove('active');
                }
            });
        }

        window.addEventListener('scroll', handleScrollAnimation);

        // Call once to handle initial positioning
        handleScrollAnimation();

        return () => {
            window.removeEventListener('scroll', handleScrollAnimation);
        };
    }, []);

    return (
        <div className={styles.body}>
            <main>
                <ul id="cards">
                    <li className={styles.card__container} id="card_1">
                        <div className={styles.card__content}>
                            <div>
                                <h2>Card One</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p><a href="#top" className="btn btn--accent">Read more</a></p>
                            </div>
                            <figure>
                                <img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg" alt="Image description" />
                            </figure>
                        </div>
                    </li>

                    <li className={styles.card__container} id="card_1">
                        <div className={styles.card__content}>
                            <div>
                                <h2>Card One</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p><a href="#top" className="btn btn--accent">Read more</a></p>
                            </div>
                            <figure>
                                <img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg" alt="Image description" />
                            </figure>
                        </div>
                    </li>

                    <li className={styles.card__container} id="card_1">
                        <div className={styles.card__content}>
                            <div>
                                <h2>Card One</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p><a href="#top" className="btn btn--accent">Read more</a></p>
                            </div>
                            <figure>
                                <img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg" alt="Image description" />
                            </figure>
                        </div>
                    </li>

                    <li className={styles.card__container} id="card_1">
                        <div className={styles.card__content}>
                            <div>
                                <h2>Card One</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p><a href="#top" className="btn btn--accent">Read more</a></p>
                            </div>
                            <figure>
                                <img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg" alt="Image description" />
                            </figure>
                        </div>
                    </li>

                    {/* Repeat similar structure for other cards */}
                </ul>
            </main>
            <aside>
                {/* Aside content remains the same */}
            </aside>
        </div>
    );
};

export default About;
