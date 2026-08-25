import { NavLink } from "react-router";
import { motion } from "framer-motion";
import '../components/RecipeIntro.css'

export const RecipeIntro = () => {
    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 60,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    return (

        <section className="recipe-intro">

            <motion.div
                className="about-left"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.3,
                }}
            >
                <div className="intro-line">

                    <small>THE ART OF COOKING</small>

                </div>

                <h2>
                    EXPLORE & Cook
                </h2>

                <p>
                    Discover delicious recipes from around the world,
                    from timeless classics to exciting new flavors.
                    Find something worth cooking today.
                </p>
                <NavLink to={"/categories"}>
                    <button className="intro-btn">
                        EXPLORE CATEGORIES
                    </button>
                </NavLink>

            </motion.div>




        </section>
    );
};