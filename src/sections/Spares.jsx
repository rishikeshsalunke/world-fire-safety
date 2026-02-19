import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/Button";

const spares = [
    { name: "ABC Valve With Gauge", image: "/spares/abc-valve-gauge.png" },
    { name: "ABC Body Belt (Black)", image: "/spares/abc-body-belt-black.png" },
    { name: "ABC Body Belt (Yellow)", image: "/spares/abc-body-belt-yellow.png" },
    { name: "ABC Spindle Washer", image: "/spares/abc-spindle-washer.png" },
    { name: "ABC Valve O-Ring", image: "/spares/abc-o-ring.png" },
    { name: "PVC Nozzle", image: "/spares/pvc-nozzle.png" },
    { name: "ABC Neck Ring", image: "/spares/abc-neck-ring.png" },
    { name: "CO2 Rubber Grip", image: "/spares/co2-rubber-grip.png" },
    { name: "Fire ABC Fish Lock", image: "/spares/abc-fish-lock.png" },
    { name: "M-Foam Nozzle", image: "/spares/m-foam-nozzle.png" },
    { name: "Tail Belt (ABC Body)", image: "/spares/tai-belt.png" },
    { name: "Tail Seal", image: "/spares/tai-seal.png" },
    { name: "PVC Shutup Nozzle", image: "/spares/pvc-shutup-nozzle.png" },
    { name: "PVC Shutup Nozzk", image: "/spares/pvc-shutup-nozzk.png" },
    { name: "CO2 Hose", image: "/spares/co2-hose.png" },
    { name: "DCP Grip", image: "/spares/dcp-grip.png" },
    { name: "CO2 Bend Pipe", image: "/spares/co2-bend-pipe.png" },
    { name: "ABC Hose", image: "/spares/abc-hose.png" },
    { name: "CO2 Horn", image: "/spares/co2-horn.png" },
    { name: "ABC Syfan Tube", image: "/spares/abc-syfan-tube.png" },
    { name: "ABC Lock Pin", image: "/spares/abc-lock-pin.png" },
    { name: "Wall Bracket", image: "/spares/wall-bracket.png" },
    { name: "CO2 Safety Pin", image: "/spares/co2-safety-pin.png" },
    { name: "CO2 Lock Ring", image: "/spares/co2-lock-ring.png" },
    { name: "Blank Cap", image: "/spares/blank-cap.png" },
    { name: "CO2 Neck Handle", image: "/spares/co2-neck-handle.png" },
];

export const Spares = () => {

    const [visible, setVisible] = useState(8);

    return (
        <section id="spares" className="py-24 bg-muted/30">

            <div className="container mx-auto px-4">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Fire Extinguisher Spares & Accessories
                    </h2>
                    <p className="text-foreground/70 mt-3">
                        Complete range of ABC & CO₂ replacement parts.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">


                    {spares.slice(0, visible).map((item, i) => (
                        <div
                            key={i}
                            className="group relative bg-white rounded-xl border border-border/40 hover:border-primary/40
                            shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300"
                        >

                            {/* Image */}
                            <div className="relative h-32 overflow-hidden rounded-t-xl">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-contain bg-white p-3
                                    group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4 text-center flex flex-col h-full">

                                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition">
                                    {item.name}
                                </h3>

                                {/* <Button
                                    size="sm"
                                    className="mt-4 w-full text-xs"
                                    onClick={() =>
                                        window.open(
                                            `https://wa.me/91YOURNUMBER?text=Hello, I want enquiry for ${item.name}`
                                        )
                                    }
                                >
                                    Enquire
                                    <ArrowUpRight className="w-4 h-4 ml-1" />
                                </Button> */}


                            </div>

                        </div>
                    ))}


                </div>

                <div className="text-center mt-10">
                    <Button
                        size="lg"
                        onClick={() =>
                            visible >= spares.length ? setVisible(8) : setVisible(prev => prev + 8)
                        }
                    >
                        {visible >= spares.length ? "View Less" : "Load More"}
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>



            </div>
        </section>
    );
}
