import OnlineDripper1 from '../../styles/assests/online-drip.png';
import FlatDripReel from '../../styles/assests/product2.png';
import OnlineDripLateral from '../../styles/assests/product3.png';
import PressureCompensatingDripper from '../../styles/assests/product1.png';
import RMSprinkler from '../../styles/assests/rm-sprinkler.png';
import RMMiniMicroSprinkler from '../../styles/assests/product4.png';
import HDPERoll from '../../styles/assests/product5.png';
import DiscFilters from '../../styles/assests/disc-filter.png';
import SandFilters from '../../styles/assests/product6.png';
import Injector from '../../styles/assests/product7.png';
import Fertigation from '../../styles/assests/fertigation.png';
import HydroFilter from '../../styles/assests/product8.png';

const pageStyle = {
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    minHeight: '100vh',
    color: '#333'
};

const headerBaseStyle = {
    textAlign: 'center',
    marginBottom: '50px',
    padding: '30px',
    border: '3px solid',
    borderRadius: '15px',
    color: 'white',
    boxShadow: '0 8px 32px'
};

const h1Style = {
    fontSize: '3em',
    margin: '0',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontWeight: 'bold'
};

const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '50px',
    background: 'white',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
};

const textContainerStyle = {
    flex: 1,
    marginRight: '30px'
};

const h2BaseStyle = {
    fontSize: '2.2em',
    borderBottom: '3px solid',
    paddingBottom: '15px',
    marginBottom: '20px'
};

const pBaseStyle = {
    fontSize: '1.2em',
    lineHeight: '1.8',
    textAlign: 'justify',
    color: '#555'
};

const imageContainerStyle = {
    flex: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};

const imageWrapperStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px'
};

const largeImgStyle = {
    width: '350px',
    height: '270px',
    transition: 'transform 0.1s ease'
};

const smallImgStyle = {
    width: '300px',
    height: '300px',
    transition: 'transform 0.3s ease'
};

function SectionHeader({ title, borderColor, bgGradient, shadowColor }) {
    return (
        <div style={{
            ...headerBaseStyle,
            border: `3px solid ${borderColor}`,
            background: bgGradient,
            boxShadow: `0 8px 32px ${shadowColor}`
        }}>
            <h1 style={h1Style}>{title}</h1>
        </div>
    );
}

function ProductSection({ title, paragraphs, imageSrc, imageAlt, color, imageSize = 'large' }) {
    const imgStyle = imageSize === 'small' ? smallImgStyle : largeImgStyle;
    const h2Style = { ...h2BaseStyle, color, borderBottom: `3px solid ${color}` };

    const handleContainerMouseEnter = (e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.15)';
    };

    const handleContainerMouseLeave = (e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
    };

    const handleImgMouseEnter = (e) => {
        e.currentTarget.style.transform = imageSize === 'small' ? 'scale(1.05)' : 'scale(1.02)';
    };

    const handleImgMouseLeave = (e) => {
        e.currentTarget.style.transform = 'scale(1)';
    };

    return (
        <div
            style={containerStyle}
            onMouseEnter={handleContainerMouseEnter}
            onMouseLeave={handleContainerMouseLeave}
        >
            <div style={textContainerStyle}>
                <h2 style={h2Style}>{title}</h2>
                {paragraphs.map((paragraph, index) => (
                    <p
                        key={index}
                        style={{
                            ...pBaseStyle,
                            marginBottom: index < paragraphs.length - 1 ? '15px' : 0
                        }}
                    >
                        {paragraph}
                    </p>
                ))}
            </div>
            <div style={imageContainerStyle}>
                <div style={imageWrapperStyle}>
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        style={imgStyle}
                        onMouseEnter={handleImgMouseEnter}
                        onMouseLeave={handleImgMouseLeave}
                    />
                </div>
            </div>
        </div>
    );
}

function Product() {
    const blueBorder = '#007bff';
    const blueGradient = 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)';
    const blueShadow = 'rgba(0, 123, 255, 0.3)';

    const greenBorder = '#28a745';
    const greenGradient = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
    const greenShadow = 'rgba(40, 167, 69, 0.3)';

    return (
        <div className="product-page" style={pageStyle}>
            <SectionHeader
                title="DRIP IRRIGATION SYSTEM"
                borderColor={blueBorder}
                bgGradient={blueGradient}
                shadowColor={blueShadow}
            />

            <ProductSection
                title="ONLINE DRIP OPENABLE THREADED DRIPPER (AS PER IS 13487:1992)"
                paragraphs={["Available in 4lph and 8lph. Openable in three piece. Simple in cleaning. Suitable for Orchards, Plantations, Field crops etc."]}
                imageSrc={OnlineDripper1}
                imageAlt="Online Drip Dripper 1"
                color={blueBorder}
                imageSize="small"
            />

            <ProductSection
                title="FLAT DRIP-SMART LINE"
                paragraphs={[
                    "16mm 30cm 2.0 lph 15mil Flat Drip Smart Line is cheap solution for watering open fields, orchards, hedges, row plants, flowerbeds and green houses. Max. lateral length for drip irrigation pipe 120m. Outside diameter 16mm (1/2\") Wall thickness 15mil(0.4mm) Drippers spacing 30cm Discharge of each dripper 2.0l/h Available on 1000m reel.",
                    "This flat Drip line provides advance and state of the art micro irrigation to the fields, with wall thickness varying from 0.20 mm to 0.90 mm and discharge varying from 2 to 4 lph and drippers spacing from 30 to 90 cm, with cluster, it provides excellent solution for various crops in the Indian conditions."
                ]}
                imageSrc={FlatDripReel}
                imageAlt="Flat Drip-Smart Line Reel"
                color={blueBorder}
            />

            <ProductSection
                title="ONLINE DRIP LATERAL"
                paragraphs={["Available in 12mm, 16mm, 20mm and 32mm diameters in class-1 & class-2, made of high-grade virgin polyethylene, resistant to chemicals and fertilizer used in agriculture. Used as lateral pipe in various micro irrigation systems such as Drip, Micro sprinkler, Micro sprayer, Jets, Foggers etc."]}
                imageSrc={OnlineDripLateral}
                imageAlt="Online Drip Lateral"
                color={blueBorder}
            />

            <ProductSection
                title="PRESSURE COMPENSATING DRIPPER"
                paragraphs={["Cylindrical PC dripper with unique regulated labyrinth with self-flushing operation at the beginning and the end of each irrigation cycle. Useful for using undulated area for uniform discharge. Triple inlet filter with filtering area 10 times larger than any other dripper. High clog resistance. Suitable for poor quality and effluent water. Large pressure compensation range up to 4.3 bar."]}
                imageSrc={PressureCompensatingDripper}
                imageAlt="Pressure Compensating Dripper"
                color={blueBorder}
                imageSize="small"
            />

            <SectionHeader
                title="SPRINKLER IRRIGATION SYSTEM"
                borderColor={greenBorder}
                bgGradient={greenGradient}
                shadowColor={greenShadow}
            />

            <ProductSection
                title="RM SPRINKLER"
                paragraphs={[
                    "Made of virgin and high quality raw material and known for the long durability.",
                    "RM Sprinkler sets are of ISI Standard with two types, i.e. \"C\" Clamp and Latch system. Also available with good quality Non ISI sets known as \"Indopipe Sprinkler\".",
                    "RM Sprinkler sets are available in 2.5kg/cm² and 3.2kg/cm² pressure rating pipes sizes varies to 63mm to 110mm."
                ]}
                imageSrc={RMSprinkler}
                imageAlt="RM Sprinkler"
                color={greenBorder}
            />

            <ProductSection
                title="RM MINI & MICRO SPRINKLER"
                paragraphs={["Suitable for all dense growing crops like Potato, Onion, Garlic, Cabbage, Leafy vegetables, Strawberry, Groundnut, Mustard, Pulses, Tea, Fodder crops, Nursery etc."]}
                imageSrc={RMMiniMicroSprinkler}
                imageAlt="RM Mini & Micro Sprinkler"
                color={greenBorder}
            />

            <SectionHeader
                title="HDPE PIPES"
                borderColor={blueBorder}
                bgGradient={blueGradient}
                shadowColor={blueShadow}
            />

            <ProductSection
                title="HDPE PIPES (IS:4984, STANDARDS PE63, PE80 AND PE100 GRADES)"
                paragraphs={[
                    "Manufactured as per IS-4984, standards and PE-63, PE-80 and PE-100 grades.",
                    "Manufactured from 20 to 400 mm sizes at various pressure rating from 2.5 to 16 kg/cm² (35 to 227.5 psi).",
                    "Up to 6\" in straight lengths and coils. Higher sizes in standard and other straight lengths only."
                ]}
                imageSrc={HDPERoll}
                imageAlt="HDPE Pipe in Coil"
                color={blueBorder}
            />

            <SectionHeader
                title="Filters"
                borderColor={greenBorder}
                bgGradient={greenGradient}
                shadowColor={greenShadow}
            />

            <ProductSection
                title="Plastic Disc Filters"
                paragraphs={[
                    "Disc filtration Technology and used for removing inorganic impurity easy installation.",
                    "Technical Data Flow rate 25m2 and 50m2 with inlet sizes 2\" and 3\""
                ]}
                imageSrc={DiscFilters}
                imageAlt="Plastic Disc Filters"
                color={greenBorder}
            />

            <ProductSection
                title="Sand / Gravel Media Filters"
                paragraphs={[
                    "Available in 2\", 2.5\" and 3\" inlet outlet sizes with filtering capacity 10, 20, 30, 40 and 50 rehr. respectively.",
                    "Available wide range for selection. Vertical model for effective filtration. Filtering media quartz of grade 2 to 3mm.",
                    "Mild steel powder coated corrosion resistant body. Pressure testing port at inlet and outlet. Easy to open and clean.",
                    "Used as a primary filter, effective against organic impurities, algae and against very fin suspended particles."
                ]}
                imageSrc={SandFilters}
                imageAlt="Sand / Gravel Media Filters"
                color={greenBorder}
            />

            <ProductSection
                title="Fertilizer Injector"
                paragraphs={[
                    "RM ventury is made according to criteria of IS:14483.",
                    "It is useful to inject chemicals/fertilizers or any liquid in flowing irrigation water. Ventury unit works on water pressure."
                ]}
                imageSrc={Injector}
                imageAlt="Fertilizer Injector"
                color={greenBorder}
            />

            <ProductSection
                title="Fertigation Tank"
                paragraphs={[
                    "Mild steel construction powder coated with thick red colored pure polyester from both inside outside surface for protection against corrasion and weather effects.",
                    "Turbulent inlet ensures through mixing of chemicals or fertilizers separate valves are provided on the inlet and outlet to control the injection rate special provision of strainer on the outlet Drain port to flush the tank Maximum working pressure 5 kg/cm2.",
                    "Available in customized sizes 30, 60, 120 and 150 liters."
                ]}
                imageSrc={Fertigation}
                imageAlt="Fertigation Tank"
                color={greenBorder}
            />

            <ProductSection
                title="Hydro-Cyclone Filter"
                paragraphs={[
                    "Available with metal and HDPE plastic body. Available in 2\" and 3\" inlet / outlet sizes with filtering capacity 20 and 40 rehr. respectively.",
                    "Use data primary filter, for effective removal of high density particles such as coarse sand 1 gravel."
                ]}
                imageSrc={HydroFilter}
                imageAlt="Hydro-Cyclone Filter"
                color={greenBorder}
            />
        </div>
    );
}

export default Product;