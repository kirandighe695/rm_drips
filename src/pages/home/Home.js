import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MdCheckCircle, MdLocalShipping, MdThumbUp, MdArrowForward, MdRefresh } from "react-icons/md";
import Bg1 from "../../styles/assests/banner1.jpg";
import Bg2 from "../../styles/assests/banner2.jpg";
import Bg3 from "../../styles/assests/banner3.jpg";
import InfraImage from "../../styles/assests/infrastructure.jpg";
import VisionImage from "../../styles/assests/vision.jpg";
import SprinklerImage from "../../styles/assests/sprinkler.jpg";
import Product1 from "../../styles/assests/fertigation.png";
import Product2 from "../../styles/assests/online-drip.png";
import Product3 from "../../styles/assests/disc-filter.png";
import Product4 from "../../styles/assests/rm-sprinkler.png";
import NivruttiImage from "../../styles/assests/nivrutti.jpg";
import SomnathImage from "../../styles/assests/somnath.jpg";
import WorldMap from "../../styles/assests/world.jpg";
import SuccessImg1 from "../../styles/assests/gallery1.jpg";
import SuccessImg2 from "../../styles/assests/gallery2.jpg";
import SuccessImg3 from "../../styles/assests/gallery3.jpg";
import SuccessImg4 from "../../styles/assests/gallery4.jpg";
import SuccessImg5 from "../../styles/assests/gallery5_new.jpg";
import SuccessImg6 from "../../styles/assests/gallery9.jpg";
import SuccessImg7 from "../../styles/assests/gallery8.jpg";
import SuccessImg8 from "../../styles/assests/gallery11.jpg";

function Home() {
    const images = [Bg1, Bg2, Bg3];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 7000);
        return () => clearInterval(interval);
    }, [images.length]);

    const successImages = [
        { src: SuccessImg1, alt: "Cabbage field with drip" },
        { src: SuccessImg2, alt: "Grape vines" },
        { src: SuccessImg3, alt: "Vineyard path" },
        { src: SuccessImg4, alt: "Tomato plants" },
        { src: SuccessImg5, alt: "Drip on plant" },
        { src: SuccessImg6, alt: "Field with irrigation lines" },
        { src: SuccessImg7, alt: "Filtration tanks" },
        { src: SuccessImg8, alt: "Greenhouse crops" }
    ];

    const imagePositions = [
        { gridColumn: "1", gridRow: "1" },
        { gridColumn: "2", gridRow: "1" },
        { gridColumn: "3", gridRow: "1" },
        { gridColumn: "1", gridRow: "2" },
        { gridColumn: "3", gridRow: "2" },
        { gridColumn: "1", gridRow: "3" },
        { gridColumn: "2", gridRow: "3" },
        { gridColumn: "3", gridRow: "3" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    const [formData, setFormData] = useState({
        fullName: '',
        city: '',
        mobile: '',
        email: '',
        message: '',
        securityCode: ''
    });
    const [securityImage, setSecurityImage] = useState('4ntZ');
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const generateSecurityCode = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = '';
        for (let i = 0; i < 4; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setSecurityImage(code);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Required';
        if (!formData.city.trim()) newErrors.city = 'Required';
        if (!formData.mobile.trim()) newErrors.mobile = 'Required';
        if (!formData.email.trim()) newErrors.email = 'Required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
        if (!formData.message.trim()) newErrors.message = 'Required';
        if (formData.securityCode !== securityImage) newErrors.securityCode = 'Invalid code';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            alert('Thank you! Your message has been sent.');
            setFormData({ fullName: '', city: '', mobile: '', email: '', message: '', securityCode: '' });
            generateSecurityCode();
        }
    };

    const handleReset = () => {
        setFormData({ fullName: '', city: '', mobile: '', email: '', message: '', securityCode: '' });
        setErrors({});
        generateSecurityCode();
    };

    return (
        <>
            <div
                className="hero-wrapper"
                style={{
                    position: "relative",
                    height: "90vh",
                    overflow: "hidden",
                }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        style={{
                            backgroundImage: `url(${images[index]})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "absolute",
                            inset: 0,
                        }}
                    />
                </AnimatePresence>

                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(rgba(0, 128, 0, 0.6), rgba(0, 128, 0, 0.4))",
                    }}
                />

                <motion.div
                    className="text-white text-center p-5"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                        position: "relative",
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 2,
                    }}
                >
                    <motion.h1
                        className="display-3 fw-bold mb-3"
                        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        "Born to serve"
                    </motion.h1>
                    <motion.h3
                        className="fs-1"
                        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        the farming community
                    </motion.h3>
                </motion.div>

                <div
                    style={{
                        position: "absolute",
                        left: "20px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        zIndex: 3,
                    }}
                >
                    {images.map((_, i) => (
                        <motion.div
                            key={i}
                            onClick={() => setIndex(i)}
                            whileHover={{ scale: 1.2, background: "#fff" }}
                            style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                border: "2px solid #fff",
                                background: index === i ? "#fff" : "transparent",
                                cursor: "pointer",
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="container-fluid py-5 bg-light">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="row align-items-center">
                        <motion.div className="col-md-8" variants={itemVariants}>
                            <h2 className="fw-bold mb-4">
                                WELCOME TO <span className="text-success">R M</span> DRIP LTD.
                            </h2>
                            <p className="lead mb-4">
                                We, the team of{" "}
                                <b>R M Drip & Sprinklers Systems Ltd.</b> (Formerly known as R M
                                Drip & Sprinkler Systems Pvt Ltd.) provide customers with
                                irrigation products that comply consistently with quality
                                requirements in all respects, providing trainings for customers,
                                technical services for installation & post installation, which
                                ensure enhanced customer satisfaction.
                            </p>
                            <p className="mb-0">
                                <a href="/" className="text-success fw-bold text-decoration-none">
                                    R M Drip envisages its growth by focusing on five basic
                                    attributes: reliability, durability, advanced technology, precise process,
                                    responsive products.
                                </a>
                            </p>
                        </motion.div>

                        <motion.div className="col-md-4" variants={itemVariants}>
                            <motion.img
                                src={SprinklerImage}
                                alt="Sprinkler"
                                className="img-fluid rounded shadow-lg"
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    </div>

                    <div className="row mt-5">
                        <motion.div className="col-md-6" variants={itemVariants}>
                            <div className="position-relative mb-4">
                                <motion.img
                                    src={InfraImage}
                                    alt="Infrastructure"
                                    className="img-fluid rounded shadow-lg"
                                    whileHover={{ scale: 1.02 }}
                                />
                                <motion.div
                                    className="position-absolute bottom-0 start-0 text-white p-4"
                                    style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.7))" }}
                                    initial={{ x: -50, opacity: 0 }}
                                    whileHover={{ x: 0, opacity: 1 }}
                                >
                                    <h3 className="fw-bold mb-0">INFRASTRUCTURE</h3>
                                </motion.div>
                            </div>
                            <p>
                                R M Drip & Sprinklers Systems Ltd. has the best of
                                infrastructure with advance machineries and world class
                                technology.
                            </p>
                        </motion.div>

                        <motion.div className="col-md-6" variants={itemVariants}>
                            <div className="position-relative mb-4">
                                <motion.img
                                    src={VisionImage}
                                    alt="Vision & Mission"
                                    className="img-fluid rounded shadow-lg"
                                    whileHover={{ scale: 1.02 }}
                                />
                                <motion.div
                                    className="position-absolute bottom-0 start-0 text-white p-4"
                                    style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.7))" }}
                                    initial={{ x: -50, opacity: 0 }}
                                    whileHover={{ x: 0, opacity: 1 }}
                                >
                                    <h3 className="fw-bold mb-0">VISION & MISSION</h3>
                                </motion.div>
                            </div>
                            <p>
                                The Company Envisages Its Growth By Focusing On The Five
                                Basic Attributes Which Are Enumerated Below...
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className="container-fluid py-5 bg-white">
                <div className="text-center mb-5">
                    <motion.h2
                        className="fw-bold text-success display-4"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        PRODUCTS RANGE
                    </motion.h2>
                    <motion.p
                        className="lead text-muted"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        The company's pricing policy has created a great acceptance for its
                        products in the market. The product pricing has been positioned
                        quite low; however, the quality of the products is quite superior as
                        compared to other renowned brands in the market.
                    </motion.p>
                </div>

                <motion.div
                    className="row text-center g-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {[
                        {
                            img: Product1,
                            title: "FERTIGATION TANK",
                            desc: "Mild steel construction powder coated with thick red colored pure...",
                        },
                        {
                            img: Product2,
                            title: "ONLINE DRIP",
                            desc: "Available in 4lph and 8lph. Open able in three piece. Simple in...",
                        },
                        {
                            img: Product3,
                            title: "PLASTIC DISC FILTERS",
                            desc: "Disc filtration Technology and used for removing inorganic impurity...",
                        },
                        {
                            img: Product4,
                            title: "R M SPRINKLER",
                            desc: "RM Sprinkler sets are made of virgin and high quality raw material...",
                        },
                    ].map((p, i) => (
                        <motion.div
                            key={i}
                            className="col-md-3"
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                        >
                            <motion.div
                                className="card h-100 shadow-sm border-0"
                                style={{ borderRadius: "15px", overflow: "hidden" }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.img
                                    src={p.img}
                                    alt={p.title}
                                    className="card-img-top"
                                    style={{ height: "250px", objectFit: "cover" }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold text-success">{p.title}</h5>
                                    <p className="card-text text-muted flex-grow-1">{p.desc}</p>
                                    <a href="/" className="text-success fw-bold text-decoration-none mt-auto">
                                        read more.. <MdArrowForward className="ms-1" />
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="container-fluid py-5" style={{ backgroundColor: "#f0fff0" }}>
                <div className="text-center mb-5">
                    <motion.h2
                        className="fw-bold display-4"
                        style={{ color: "#006400" }}
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        LEADERSHIPS
                    </motion.h2>
                </div>

                <motion.div
                    className="row justify-content-center g-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className="col-md-5" variants={itemVariants}>
                        <motion.div
                            className="text-center border rounded p-4 shadow-sm"
                            style={{ backgroundColor: "#e8f5e8", borderRadius: "20px" }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.img
                                src={NivruttiImage}
                                alt="Mr. Nivrutti P. Kedar"
                                className="rounded-circle mb-3 shadow-lg"
                                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            />
                            <h5 className="fw-bold text-success">MR. NIVRUTTI P. KEDAR (Managing Director)</h5>
                            <p className="text-muted">
                                The man with vision and a strong desire is a graduate in Agriculture Sciences from Maharashtra. Belonging to farming family, he started...
                            </p>
                            <a href="/" className="text-success fw-bold text-decoration-none">
                                read more... <MdArrowForward className="ms-1" />
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div className="col-md-5" variants={itemVariants}>
                        <motion.div
                            className="text-center border rounded p-4 shadow-sm"
                            style={{ backgroundColor: "#e8f5e8", borderRadius: "20px" }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.img
                                src={SomnathImage}
                                alt="Mr. Somnath K. Date"
                                className="rounded-circle mb-3 shadow-lg"
                                style={{ width: "150px", height: "125px", objectFit: "cover" }}
                                whileHover={{ rotate: -360 }}
                                transition={{ duration: 0.6 }}
                            />
                            <h5 className="fw-bold text-success">MR. SOMNATH K. DATE (Non-Executive Director, Chairman)</h5>
                            <p className="text-muted">
                                Graduate from Pune University, Maharashtra. Has over 30 years of experience in industrial sector...
                            </p>
                            <a href="/" className="text-success fw-bold text-decoration-none">
                                read more... <MdArrowForward className="ms-1" />
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="container-fluid py-5" style={{ backgroundColor: "#f0fff0", position: "relative" }}>
                <motion.div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "50%",
                        background: "linear-gradient(to bottom, #006400, transparent)",
                        zIndex: 1,
                    }}
                />
                <div style={{ position: "relative", zIndex: 2 }}>
                    <div className="text-center mb-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="d-inline-block mb-3"
                            style={{ fontSize: "3rem" }}
                        >
                            <MdThumbUp style={{ fontSize: "3rem", color: "#fff" }} />
                        </motion.div>
                        <motion.h2
                            className="fw-bold mb-3 display-4"
                            style={{ color: "#fff", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            WHY CHOOSE US
                        </motion.h2>
                        <motion.p
                            className="text-white lead mb-5"
                            style={{ maxWidth: "800px", margin: "0 auto", textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Company believes on the principle “Quality comes from within”. Considering this as motive, employees of the company are trained and accustomed to work strategically to improve the quality and maintain the standards.
                        </motion.p>
                    </div>

                    <motion.div
                        className="row justify-content-center g-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                Icon: MdCheckCircle,
                                title: "QUALITY",
                                subtitle: "Zero Defects in Products",
                            },
                            {
                                Icon: MdLocalShipping,
                                title: "DELIVERY",
                                subtitle: "Products On Time Delivery",
                            },
                            {
                                Icon: MdThumbUp,
                                title: "CUSTOMER SATISFACTION",
                                subtitle: "Guaranteed Customer Satisfaction",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="col-md-4 text-center"
                                variants={itemVariants}
                            >
                                <motion.div
                                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                    style={{
                                        width: "120px",
                                        height: "120px",
                                        backgroundColor: "#28a745",
                                        color: "#fff",
                                        fontSize: "3rem",
                                        cursor: "pointer",
                                        boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 360,
                                        backgroundColor: "#218838",
                                        boxShadow: "0 12px 24px rgba(0,0,0,0.3)"
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                        duration: 0.6
                                    }}
                                >
                                    <item.Icon style={{ fontSize: "2.5rem" }} />
                                </motion.div>
                                <h5 className="fw-bold text-success mb-2">{item.title}</h5>
                                <p className="text-muted lead">{item.subtitle}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="text-center mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div
                            style={{
                                width: 0,
                                height: 0,
                                borderLeft: "20px solid transparent",
                                borderRight: "20px solid transparent",
                                borderBottom: "30px solid #28a745",
                                display: "inline-block",
                                transform: "rotate(180deg)",
                            }}
                        />
                    </motion.div>
                </div>
            </div>

            <div className="container-fluid py-5" style={{ backgroundColor: "#f8fff8" }}>
                <motion.div
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="fw-bold text-success mb-3 display-4">SUCCESS STORIES</h2>
                    <p className="text-muted lead" style={{ maxWidth: "800px", margin: "0 auto" }}>
                        By using the products of R M Drip, many farmers are getting benefited by adopting efficient irrigation technology.
                    </p>
                    <div className="d-inline-block mt-3">
                        <MdArrowForward style={{ color: "#28a745", fontSize: "2rem" }} />
                    </div>
                </motion.div>

                <div
                    className="container"
                    style={{
                        position: "relative",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        height: "700px"
                    }}
                >
                    <motion.div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr",
                            gridTemplateRows: "repeat(4, 1fr)",
                            gap: "4px",
                            height: "100%",
                            backgroundColor: "#e0f2e0",
                            borderRadius: "12px",
                            overflow: "hidden",
                            boxShadow: "0 12px 40px rgba(0,0,0,0.1)"
                        }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {successImages.map((img, i) => (
                            <motion.div
                                key={i}
                                className="position-relative overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                                style={{
                                    ...imagePositions[i],
                                    height: "100%"
                                }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <motion.img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                    initial={{ scale: 1.1 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                />
                                <div className="position-absolute top-2 end-2 p-2 bg-success bg-opacity-90 rounded-circle shadow">
                                    <MdCheckCircle className="text-white" size={20} />
                                </div>
                            </motion.div>
                        ))}

                        <motion.div
                            className="position-relative d-flex align-items-center justify-content-center text-center p-4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            style={{
                                gridColumn: "2",
                                gridRow: "2",
                                backgroundColor: "#fff",
                                border: "2px solid #28a745",
                                height: "100%",
                                boxShadow: "inset 0 0 20px rgba(40, 167, 69, 0.1)"
                            }}
                        >
                            <div>
                                <h3 className="fw-bold text-success mb-2">SUCCESS STORIES</h3>
                                <p className="text-muted small mb-0">
                                    By using the products of R M Drip, many farmers are getting benefited by adopting efficient irrigation technology.
                                </p>
                                <div className="mt-2">
                                    <span style={{ color: "#28a745" }}>•••</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="text-center mt-5">
                    <motion.button
                        className="btn btn-success btn-lg px-4 py-2 fw-bold shadow-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        View More Stories <MdArrowForward className="ms-2" />
                    </motion.button>
                </div>
            </div>

            <div
                className="container-fluid py-5"
                style={{
                    backgroundImage: `url(${WorldMap})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    minHeight: "80vh",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(255, 255, 255, 0.95)",
                        zIndex: 1,
                    }}
                />

                <div style={{ position: "relative", zIndex: 2 }}>
                    <motion.div
                        className="row align-items-center g-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div className="col-md-4" variants={itemVariants}>
                            <motion.div
                                className="p-4 rounded shadow-sm"
                                style={{
                                    backgroundColor: "rgba(0, 128, 0, 0.1)",
                                    border: "2px solid #28a745",
                                    borderRadius: "15px",
                                    height: "fit-content",
                                }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <h5 className="fw-bold text-success mb-3">DEALER NETWORK</h5>
                                <p className="text-muted small">
                                    R M Drip has strong dealer network across India to deliver and serve the farming community directly.
                                </p>
                            </motion.div>
                        </motion.div>

                        <motion.div className="col-md-8" variants={itemVariants}>
                            <div className="text-start">
                                <motion.h2
                                    className="fw-bold mb-4 display-4"
                                    style={{ color: "#006400" }}
                                    initial={{ opacity: 0, y: -50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    GET IN TOUCH
                                </motion.h2>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="mb-4 p-3 rounded shadow-sm"
                                    style={{ backgroundColor: "#f8fff8", borderRadius: "10px" }}
                                >
                                    <h6 className="fw-bold text-success">REGD. OFFICE</h6>
                                    <p className="text-muted small mb-1">
                                        Plot No. 475, Village Gonde, Tal. Sinnar, Dist. Nashik - 422103, Maharashtra, India.
                                    </p>
                                    <p className="text-muted small mb-0">Contact No: +91 92265 0909</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="mb-4 p-3 rounded shadow-sm"
                                    style={{ backgroundColor: "#f8fff8", borderRadius: "10px" }}
                                >
                                    <h6 className="fw-bold text-success">OUR TEAM</h6>
                                    <div className="text-muted small">
                                        <div className="mb-2">
                                            <strong>Mr. Rajesh Mategaonkar</strong><br />
                                            Mob: 77220 75989<br />
                                            (Maharashtra / Tripura / Jharkhand / Uttar Pradesh / Bihar)
                                        </div>
                                        <div className="mb-2">
                                            <strong>Mr. Yash Belgaokar</strong><br />
                                            Mob: 91926 509801<br />
                                            (Goa)
                                        </div>
                                        <div className="mb-2">
                                            <strong>Mr. Ket Gawande</strong><br />
                                            Mob: +91 86691 7922<br />
                                            (Madhya Pradesh)
                                        </div>
                                        <div className="mb-0">
                                            <strong>Mr. Kiran Kore</strong><br />
                                            Mob: +91 91616 5654<br />
                                            (Karnataka)
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    className="p-3 rounded shadow-sm"
                                    style={{ backgroundColor: "#f8fff8", borderRadius: "10px" }}
                                >
                                    <h6 className="fw-bold text-success">E-MAIL</h6>
                                    <p className="text-muted small mb-0">
                                        (Operations) - operations@rmdrip.com<br />
                                        (Sales & Marketing) - sales@rmdrip.com
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="text-center mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)" }}
                >
                    <div
                        style={{
                            width: 0,
                            height: 0,
                            borderLeft: "20px solid transparent",
                            borderRight: "20px solid transparent",
                            borderTop: "30px solid #28a745",
                            display: "inline-block",
                        }}
                    />
                </motion.div>
            </div>

            {/* Contact Form Section */}
            <motion.div
                className="container-fluid py-5"
                style={{ backgroundColor: "#f8fff8" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <div className="container">
                    <motion.div className="row justify-content-center" variants={itemVariants}>
                        <motion.div className="col-lg-8" variants={itemVariants}>
                            <div className="text-center mb-5">
                                <motion.h2
                                    className="fw-bold display-4 text-success mb-3"
                                    initial={{ opacity: 0, y: -50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    CONTACT WITH US
                                </motion.h2>
                                <motion.p
                                    className="lead text-muted"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                >
                                    Get in touch with us for any inquiries or support.
                                </motion.p>
                            </div>

                            <motion.form
                                onSubmit={handleSubmit}
                                className="row g-3 needs-validation"
                                noValidate
                                variants={itemVariants}
                                style={{
                                    backgroundColor: "#fff",
                                    padding: "2rem",
                                    borderRadius: "15px",
                                    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                                    border: "1px solid #e9ecef"
                                }}
                            >
                                <div className="col-md-6">
                                    <label htmlFor="fullName" className="form-label fw-bold text-success">
                                        Full Name <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="city" className="form-label fw-bold text-success">
                                        City <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="mobile" className="form-label fw-bold text-success">
                                        Mobile No. <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                                        id="mobile"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="email" className="form-label fw-bold text-success">
                                        Email <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>
                                <div className="col-12">
                                    <label htmlFor="message" className="form-label fw-bold text-success">
                                        Message <span className="text-danger">*</span>
                                    </label>
                                    <textarea
                                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="securityCode" className="form-label fw-bold text-success">
                                        Security Code <span className="text-danger">*</span>
                                    </label>
                                    <div className="input-group">
                                        <div className="input-group-text bg-light border-success">
                                            <span className="fw-bold text-success" style={{ fontFamily: 'monospace', fontSize: '1.2rem' }}>
                                                {securityImage}
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.securityCode ? 'is-invalid' : ''}`}
                                            id="securityCode"
                                            name="securityCode"
                                            value={formData.securityCode}
                                            onChange={handleInputChange}
                                            placeholder="Enter code"
                                            maxLength="4"
                                            style={{ textTransform: 'uppercase' }}
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-success"
                                            onClick={generateSecurityCode}
                                            style={{ borderLeft: 'none' }}
                                        >
                                            <MdRefresh />
                                        </button>
                                    </div>
                                    {errors.securityCode && <div className="invalid-feedback d-block">{errors.securityCode}</div>}
                                </div>
                                <div className="col-12 text-center">
                                    <motion.button
                                        type="submit"
                                        className="btn btn-success me-2 px-4 py-2 fw-bold"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        SUBMIT
                                    </motion.button>
                                    <motion.button
                                        type="button"
                                        className="btn btn-outline-danger px-4 py-2 fw-bold"
                                        onClick={handleReset}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        RESET
                                    </motion.button>
                                </div>
                            </motion.form>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
}

export default Home;