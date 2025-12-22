import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { conferences, Conference } from "./data";

// --- Icons & Assets ---
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
    iconUrl,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});
L.Marker.prototype.options.icon = DefaultIcon;

const IconMap = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
        <line x1="8" y1="2" x2="8" y2="18"></line>
        <line x1="16" y1="6" x2="16" y2="22"></line>
    </svg>
);

const IconList = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <line x1="8" y1="6" x2="21" y2="6"></line>
        <line x1="8" y1="12" x2="21" y2="12"></line>
        <line x1="8" y1="18" x2="21" y2="18"></line>
        <line x1="3" y1="6" x2="3.01" y2="6"></line>
        <line x1="3" y1="12" x2="3.01" y2="12"></line>
        <line x1="3" y1="18" x2="3.01" y2="18"></line>
    </svg>
);

const IconUser = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

const IconCalendar = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);

const IconLocation = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);

const IconLink = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
);

const IconSlides = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M2 3h20v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3z"></path>
        <line x1="2" y1="21" x2="22" y2="21"></line>
    </svg>
);

const IconProposal = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
);

const IconJavaScript = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <polyline points="20 17 14 12 20 7"></polyline>
        <line x1="4" y1="12" x2="14" y2="12"></line>
    </svg>
);

const IconTypeScript = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);

const IconGithub = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

// --- Utils ---

const groupedConferences: { [key: string]: Conference[] } = {};

conferences.forEach((conf) => {
    if (!conf.coords) return; // Skip if no coordinates (e.g. Online)

    const key = `${conf.coords[0]},${conf.coords[1]}`;

    if (!groupedConferences[key]) {
        groupedConferences[key] = [];
    }

    groupedConferences[key].push(conf);
});

const typeColors: { [key: string]: string } = {
    PHP: "bg-indigo-100 text-indigo-800 border-indigo-200",

    Kotlin: "bg-purple-100 text-purple-800 border-purple-200",

    JavaScript: "bg-yellow-100 text-yellow-800 border-yellow-200",

    TypeScript: "bg-blue-100 text-blue-800 border-blue-200",

    Google: "bg-red-100 text-red-800 border-red-200", // Changed Google color for distinction

    SoftSkills: "bg-green-100 text-green-800 border-green-200",

    Other: "bg-gray-100 text-gray-800 border-gray-200",
};

function App() {
    const [mode, setMode] = useState<"map" | "history">("map");

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50 px-4 py-3 shadow-sm flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="flex items-center text-xl font-bold tracking-tight text-gray-800 mr-4">
                        <a
                            href="https://github.com/ysknsid25/conf"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                            aria-label="GitHub Repository"
                        >
                            <IconGithub className="w-8 h-8 mr-2" />
                        </a>
                        Kanon's Travel Record
                    </h1>
                </div>
                <div className="flex bg-gray-100 p-1 rounded-lg">
                    <button
                        onClick={() => setMode("map")}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                            mode === "map"
                                ? "bg-white text-gray-900 shadow-sm"
                                : "text-gray-500 hover:text-gray-700"
                        }`}
                    >
                        <IconMap className="w-4 h-4" />
                        <span className="hidden sm:inline">Map</span>
                    </button>
                    <button
                        onClick={() => setMode("history")}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                            mode === "history"
                                ? "bg-white text-gray-900 shadow-sm"
                                : "text-gray-500 hover:text-gray-700"
                        }`}
                    >
                        <IconList className="w-4 h-4" />
                        <span className="hidden sm:inline">History</span>
                    </button>
                </div>
            </header>

            <main className="h-[calc(100vh-64px)] w-full">
                {mode === "map" ? <MapView /> : <HistoryView />}
            </main>
        </div>
    );
}

function MapView() {
    return (
        <div className="w-full h-full">
            <MapContainer
                center={[35.6895, 139.6917]}
                zoom={6}
                style={{ height: "100%", width: "100%" }}
                scrollWheelZoom={true}
            >
                {" "}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {Object.values(groupedConferences).map((group, idx) => (
                    <Marker key={idx} position={group[0].coords}>
                        <Popup
                            minWidth={400}
                            maxWidth={500}
                            closeButton={false}
                        >
                            <PopupCard group={group} />
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

function PopupCard({ group }: { group: Conference[] }) {
    const [index, setIndex] = useState(0);
    const conf = group[index];
    const total = group.length;

    return (
        <div className="font-sans">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded border ${
                        typeColors[conf.type] || typeColors["Other"]
                    }`}
                >
                    {conf.type}
                </span>
                {total > 1 && (
                    <div className="flex items-center gap-2 text-xs bg-white border border-gray-200 rounded-full px-2 py-0.5 shadow-sm">
                        <button
                            className="hover:bg-gray-100 rounded-full p-0.5 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                            disabled={index === 0}
                            onClick={(e) => {
                                e.stopPropagation();
                                setIndex((i) => i - 1);
                            }}
                        >
                            ◀
                        </button>
                        <span className="font-medium tabular-nums">
                            {index + 1}/{total}
                        </span>
                        <button
                            className="hover:bg-gray-100 rounded-full p-0.5 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                            disabled={index === total - 1}
                            onClick={(e) => {
                                e.stopPropagation();
                                setIndex((i) => i + 1);
                            }}
                        >
                            ▶
                        </button>
                    </div>
                )}
            </div>

            <div className="p-4">
                <h3 className="text-base font-bold text-gray-900 leading-snug mb-2">
                    {conf.name}
                    {conf.isBest && (
                        <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 border border-yellow-200 px-1.5 py-0.5 rounded">
                            Best
                        </span>
                    )}
                </h3>

                <div className="flex flex-col gap-1.5 mb-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <IconCalendar className="w-4 h-4 text-gray-400" />
                        <span>{conf.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconLocation className="w-4 h-4 text-gray-400" />
                        <span>{conf.venue}</span>
                    </div>
                </div>

                <div className="space-y-2 mb-4">
                    <div className="bg-gray-50 p-2 rounded text-sm">
                        <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">
                            Theme
                        </span>
                        {conf.theme}
                    </div>
                </div>

                <div className="flex gap-3 pt-2 border-t border-gray-100">
                    {conf.url && (
                        <a
                            href={conf.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            <IconLink className="w-4 h-4" />
                            Official Site
                        </a>
                    )}
                    {conf.slidesUrl && (
                        <a
                            href={conf.slidesUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            <IconSlides className="w-4 h-4" />
                            Slides
                        </a>
                    )}
                    {conf.proposalUrl && (
                        <a
                            href={conf.proposalUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            <IconProposal className="w-4 h-4" />
                            Proposal
                        </a>
                    )}{" "}
                </div>
            </div>
        </div>
    );
}

function HistoryView() {
    const sortedConferences = [...conferences].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const groupedByYear: { [year: string]: Conference[] } = {};
    sortedConferences.forEach((conf) => {
        const year = new Date(conf.date).getFullYear().toString();
        if (!groupedByYear[year]) {
            groupedByYear[year] = [];
        }
        groupedByYear[year].push(conf);
    });

    const years = Object.keys(groupedByYear).sort(
        (a, b) => parseInt(b) - parseInt(a)
    );

    const typeCounts = conferences.reduce((acc, conf) => {
        acc[conf.type] = (acc[conf.type] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 overflow-y-auto h-full pb-20">
            <div className="mb-8 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    Statistics ({conferences.length} Total)
                </h3>
                <div className="flex flex-wrap gap-2">
                    {Object.entries(typeCounts)
                        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                        .map(([type, count]) => (
                            <span
                                key={type}
                                className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-medium border ${
                                    typeColors[type] || typeColors["Other"]
                                }`}
                            >
                                {type}
                                <span className="ml-1.5 font-bold opacity-75">
                                    {count}
                                </span>
                            </span>
                        ))}
                </div>
            </div>

            <div className="flex flex-col gap-8">
                {years.map((year) => (
                    <div key={year}>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
                            {year}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {groupedByYear[year].map((conf, idx) => (
                                <HistoryItem key={idx} conf={conf} idx={idx} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function HistoryItem({ conf, idx }: { conf: Conference; idx: number }) {
    // Style based on PRItemComponent
    return (
        <div
            className="sliding-animation flex flex-col sm:flex-row gap-4 p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            style={{ "--stagger": idx } as React.CSSProperties}
        >
            {/* Left Column: Date & Type */}
            <div className="sm:w-32 flex-shrink-0 flex flex-col gap-2">
                <div className="text-sm font-bold text-gray-500">
                    {conf.date}
                </div>
                <span
                    className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded text-xs font-medium border w-fit ${
                        typeColors[conf.type] || typeColors["Other"]
                    }`}
                >
                    {conf.type}
                </span>
            </div>

            {/* Right Column: Content */}
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                        {conf.name}
                    </h3>
                    {conf.isBest && (
                        <span className="flex-shrink-0 ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                            👑 Best Conf
                        </span>
                    )}
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                    <IconLocation className="w-3.5 h-3.5" />
                    <span>{conf.venue}</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2 mb-4">
                    <div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-0.5">
                            Theme
                        </span>
                        <p className="text-sm text-gray-700">{conf.theme}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-sm font-medium">
                    {conf.url && (
                        <a
                            href={conf.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 hover:underline"
                        >
                            <IconLink className="w-4 h-4" />
                            Official Site
                        </a>
                    )}
                    {conf.slidesUrl && (
                        <a
                            href={conf.slidesUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 hover:underline"
                        >
                            <IconSlides className="w-4 h-4" />
                            Slides
                        </a>
                    )}
                    {conf.proposalUrl && (
                        <a
                            href={conf.proposalUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 hover:underline"
                        >
                            <IconProposal className="w-4 h-4" />
                            Proposal
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
