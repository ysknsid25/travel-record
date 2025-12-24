import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { travelRecords, TravelRecord, PREFECTURE_ORDER } from "./data";

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

const IconStar = ({
    className,
    filled,
}: {
    className?: string;
    filled?: boolean;
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
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

const IconSortRating = ({ className }: { className?: string }) => (
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
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
    </svg>
);

const IconGlobe = ({ className }: { className?: string }) => (
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
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);

const IconTrophy = ({ className }: { className?: string }) => (
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
        <path d="M8 21h8m-4-9v9m-6.7-6.27a4 4 0 1 1-1.88-1.88M18.6 5.73a4 4 0 1 1 1.88 1.88M12 2a8 8 0 0 1 8 8c0 3-1.8 5.6-4.5 7h-7C5.8 15.6 4 13 4 10a8 8 0 0 1 8-8z"></path>
    </svg>
);

// --- Utils ---

const groupedRecords: { [key: string]: TravelRecord[] } = {};

travelRecords.forEach((record) => {
    const key = `${record.coords[0]},${record.coords[1]}`;
    if (!groupedRecords[key]) {
        groupedRecords[key] = [];
    }
    groupedRecords[key].push(record);
});

const REGIONS_MAP: { [region: string]: string[] } = {
    北海道: ["北海道"],
    東北: ["青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"],
    関東: [
        "茨城県",
        "栃木県",
        "群馬県",
        "埼玉県",
        "千葉県",
        "東京都",
        "神奈川県",
    ],
    北陸: ["新潟県", "富山県", "石川県", "福井県"],
    東海: ["山梨県", "長野県", "岐阜県", "静岡県", "愛知県"],
    近畿: [
        "三重県",
        "滋賀県",
        "京都府",
        "大阪府",
        "兵庫県",
        "奈良県",
        "和歌山県",
    ],
    中国: ["鳥取県", "島根県", "岡山県", "広島県", "山口県"],
    四国: ["徳島県", "香川県", "愛媛県", "高知県"],
    九州: [
        "福岡県",
        "佐賀県",
        "長崎県",
        "熊本県",
        "大分県",
        "宮崎県",
        "鹿児島県",
    ],
    沖縄: ["沖縄県"],
};

const prefectureToRegion: { [key: string]: string } = {};
Object.entries(REGIONS_MAP).forEach(([region, prefectures]) => {
    prefectures.forEach((pref) => {
        prefectureToRegion[pref] = region;
    });
});

const regionColorClasses: {
    [key: string]: {
        chipBg: string;
        chipBorder: string;
        chipText: string;
        countBg: string;
        countText: string;
        countBorder: string;
    };
} = {
    北海道: {
        chipBg: "bg-red-100",
        chipBorder: "border-red-200",
        chipText: "text-red-900",
        countBg: "bg-white",
        countText: "text-red-600",
        countBorder: "border-red-100",
    },
    東北: {
        chipBg: "bg-purple-100",
        chipBorder: "border-purple-200",
        chipText: "text-purple-900",
        countBg: "bg-white",
        countText: "text-purple-600",
        countBorder: "border-purple-100",
    },
    関東: {
        chipBg: "bg-blue-100",
        chipBorder: "border-blue-200",
        chipText: "text-blue-900",
        countBg: "bg-white",
        countText: "text-blue-600",
        countBorder: "border-blue-100",
    },
    北陸: {
        chipBg: "bg-emerald-100",
        chipBorder: "border-emerald-200",
        chipText: "text-emerald-900",
        countBg: "bg-white",
        countText: "text-emerald-600",
        countBorder: "border-emerald-100",
    },
    東海: {
        chipBg: "bg-indigo-100",
        chipBorder: "border-indigo-200",
        chipText: "text-indigo-900",
        countBg: "bg-white",
        countText: "text-indigo-600",
        countBorder: "border-indigo-100",
    },
    近畿: {
        chipBg: "bg-yellow-100",
        chipBorder: "border-yellow-200",
        chipText: "text-yellow-900",
        countBg: "bg-white",
        countText: "text-yellow-600",
        countBorder: "border-yellow-100",
    },
    中国: {
        chipBg: "bg-pink-100",
        chipBorder: "border-pink-200",
        chipText: "text-pink-900",
        countBg: "bg-white",
        countText: "text-pink-600",
        countBorder: "border-pink-100",
    },
    四国: {
        chipBg: "bg-teal-100",
        chipBorder: "border-teal-200",
        chipText: "text-teal-900",
        countBg: "bg-white",
        countText: "text-teal-600",
        countBorder: "border-teal-100",
    },
    九州: {
        chipBg: "bg-orange-100",
        chipBorder: "border-orange-200",
        chipText: "text-orange-900",
        countBg: "bg-white",
        countText: "text-orange-600",
        countBorder: "border-orange-100",
    },
    沖縄: {
        chipBg: "bg-cyan-100",
        chipBorder: "border-cyan-200",
        chipText: "text-cyan-900",
        countBg: "bg-white",
        countText: "text-cyan-600",
        countBorder: "border-cyan-100",
    },
};

function App() {
    const [mode, setMode] = useState<"map" | "list">("map");

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50 px-4 py-3 shadow-sm flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="flex items-center text-xl font-bold tracking-tight text-gray-800 mr-4">
                        <a
                            href="https://github.com/ysknsid25/travel-record"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                            aria-label="GitHub Repository"
                        >
                            <IconGithub className="w-8 h-8 mr-2" />
                        </a>
                        Travel Record
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
                        onClick={() => setMode("list")}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                            mode === "list"
                                ? "bg-white text-gray-900 shadow-sm"
                                : "text-gray-500 hover:text-gray-700"
                        }`}
                    >
                        <IconList className="w-4 h-4" />
                        <span className="hidden sm:inline">List</span>
                    </button>
                </div>
            </header>

            <main className="h-[calc(100vh-64px)] w-full">
                {mode === "map" ? <MapView /> : <ListView />}
            </main>
        </div>
    );
}

function MapView() {
    return (
        <div className="w-full h-full">
            <MapContainer
                center={[36.2048, 138.2529]} // Center of Japan (roughly)
                zoom={6}
                style={{ height: "100%", width: "100%" }}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {Object.values(groupedRecords).map((group, idx) => (
                    <Marker key={idx} position={group[0].coords}>
                        <Popup
                            minWidth={300}
                            maxWidth={400}
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

function PopupCard({ group }: { group: TravelRecord[] }) {
    const [index, setIndex] = useState(0);
    const record = group[index];
    const total = group.length;

    return (
        <div className="font-sans">
            <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">
                    {record.prefecture} ({record.year})
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
                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2">
                    {record.name}
                </h3>

                <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <IconStar
                            key={star}
                            className={`w-4 h-4 ${
                                star <= record.rating
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                            }`}
                            filled={star <= record.rating}
                        />
                    ))}
                    <span className="text-sm text-gray-500 ml-1">
                        ({record.rating}.0)
                    </span>
                </div>

                <div className="bg-yellow-50 p-3 rounded text-sm text-gray-700 italic border border-yellow-100">
                    "{record.memo}"
                </div>
            </div>
        </div>
    );
}

function ListView() {
    const [sortMode, setSortMode] = useState<
        "rating" | "prefecture" | "progress"
    >("progress");

    let content;

    if (sortMode === "rating") {
        const sortedRecords = [...travelRecords].sort(
            (a, b) => b.rating - a.rating
        );
        content = (
            <div className="flex flex-col gap-4">
                {sortedRecords.map((record, idx) => (
                    <ListItem
                        key={idx}
                        record={record}
                        index={idx}
                        prefectureToRegion={prefectureToRegion}
                        regionColorClasses={regionColorClasses}
                    />
                ))}
            </div>
        );
    } else if (sortMode === "prefecture") {
        // Sort by prefecture order (North to South)
        const groupedByPref: { [key: string]: TravelRecord[] } = {};

        // Initialize groups in correct order
        PREFECTURE_ORDER.forEach((pref) => {
            groupedByPref[pref] = [];
        });

        travelRecords.forEach((record) => {
            if (groupedByPref[record.prefecture]) {
                groupedByPref[record.prefecture].push(record);
            }
        });

        let globalIndex = 0; // For staggered animation continuity across groups

        content = (
            <div className="flex flex-col gap-8">
                {PREFECTURE_ORDER.map((pref) => {
                    const records = groupedByPref[pref];
                    if (records.length === 0) return null;

                    return (
                        <div key={pref}>
                            <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-200 pb-1 sticky top-0 bg-gray-50 z-10">
                                {pref}
                            </h2>
                            <div className="flex flex-col gap-3">
                                {records.map((record, idx) => (
                                    <ListItem
                                        key={idx}
                                        record={record}
                                        index={globalIndex++}
                                        prefectureToRegion={prefectureToRegion}
                                        regionColorClasses={regionColorClasses}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    } else {
        // Progress Mode
        const prefCounts = travelRecords.reduce((acc, record) => {
            acc[record.prefecture] = (acc[record.prefecture] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        const visitedPrefs = PREFECTURE_ORDER.filter(
            (p) => (prefCounts[p] || 0) > 0
        ).sort((a, b) => {
            const countDiff = prefCounts[b] - prefCounts[a];
            if (countDiff !== 0) return countDiff;
            return PREFECTURE_ORDER.indexOf(a) - PREFECTURE_ORDER.indexOf(b);
        });

        const unvisitedPrefs = PREFECTURE_ORDER.filter(
            (p) => (prefCounts[p] || 0) === 0
        );

        const isComplete = unvisitedPrefs.length === 0;

        content = (
            <div className="flex flex-col gap-8">
                {isComplete && (
                    <div className="bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-6 text-center shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
                            {/* Simple confetti-like decoration */}
                            <div className="absolute top-2 left-4 text-2xl animate-bounce">
                                🎉
                            </div>
                            <div
                                className="absolute top-8 right-10 text-2xl animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                            >
                                🎊
                            </div>
                            <div
                                className="absolute bottom-4 left-1/3 text-2xl animate-bounce"
                                style={{ animationDelay: "0.5s" }}
                            >
                                🥂
                            </div>
                        </div>
                        <h2 className="text-2xl font-extrabold text-yellow-800 mb-2 relative z-10">
                            Congratulations!
                        </h2>
                        <p className="text-yellow-700 font-medium relative z-10">
                            You have visited all 47 prefectures!
                        </p>
                    </div>
                )}

                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex justify-between items-end mb-2">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                            Progress
                        </h3>
                        <span className="text-2xl font-bold text-blue-600">
                            {visitedPrefs.length}
                            <span className="text-sm text-gray-400 font-normal ml-1">
                                / {PREFECTURE_ORDER.length}
                            </span>
                        </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                            style={{
                                width: `${
                                    (visitedPrefs.length /
                                        PREFECTURE_ORDER.length) *
                                    100
                                }%`,
                            }}
                        ></div>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                        Visited
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                            {visitedPrefs.length}
                        </span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {visitedPrefs.map((pref, idx) => {
                            const region = prefectureToRegion[pref] || "その他";
                            const colors = regionColorClasses[region] || {
                                chipBg: "bg-gray-100",
                                chipBorder: "border-gray-200",
                                chipText: "text-gray-900",
                                countBg: "bg-white",
                                countText: "text-gray-600",
                                countBorder: "border-gray-100",
                            };

                            return (
                                <div
                                    key={pref}
                                    className={`sliding-animation inline-flex items-center ${colors.chipBg} ${colors.chipBorder} rounded-lg px-3 py-1.5 shadow-sm`}
                                    style={
                                        {
                                            "--stagger": idx,
                                        } as React.CSSProperties
                                    }
                                >
                                    <span
                                        className={`font-bold ${colors.chipText} mr-2`}
                                    >
                                        {pref}
                                    </span>
                                    <span
                                        className={`${colors.countBg} ${colors.countText} text-xs font-bold px-2 py-0.5 rounded-full ${colors.countBorder}`}
                                    >
                                        {prefCounts[pref]}
                                    </span>
                                </div>
                            );
                        })}
                    </div>{" "}
                </div>

                {unvisitedPrefs.length > 0 && (
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                            Unvisited
                            <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                {unvisitedPrefs.length}
                            </span>
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {unvisitedPrefs.map((pref) => {
                                const region =
                                    prefectureToRegion[pref] || "その他";
                                const colors = regionColorClasses[region] || {
                                    chipBg: "bg-gray-100",
                                    chipBorder: "border-gray-200",
                                    chipText: "text-gray-500",
                                    countBg: "bg-transparent",
                                    countText: "text-gray-500",
                                    countBorder: "border-transparent",
                                };
                                return (
                                    <div
                                        key={pref}
                                        className={`inline-flex items-center ${colors.chipBg} ${colors.chipBorder} rounded-lg px-3 py-1.5 opacity-60`}
                                    >
                                        <span
                                            className={`font-medium ${colors.chipText}`}
                                        >
                                            {pref}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 overflow-y-auto h-full pb-20">
            <div className="mb-6 flex justify-end">
                <div className="bg-white p-1 rounded-lg border border-gray-200 inline-flex shadow-sm">
                    <button
                        onClick={() => setSortMode("progress")}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                            sortMode === "progress"
                                ? "bg-blue-50 text-blue-700"
                                : "text-gray-600 hover:text-gray-900"
                        }`}
                        title="Progress"
                    >
                        <IconTrophy className="w-4 h-4" />
                        <span className="hidden sm:inline">Progress</span>
                    </button>
                    <button
                        onClick={() => setSortMode("rating")}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                            sortMode === "rating"
                                ? "bg-blue-50 text-blue-700"
                                : "text-gray-600 hover:text-gray-900"
                        }`}
                        title="Rating Sort"
                    >
                        <IconSortRating className="w-4 h-4" />
                        <span className="hidden sm:inline">Rating Sort</span>
                    </button>
                    <button
                        onClick={() => setSortMode("prefecture")}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                            sortMode === "prefecture"
                                ? "bg-blue-50 text-blue-700"
                                : "text-gray-600 hover:text-gray-900"
                        }`}
                        title="Prefecture Sort"
                    >
                        <IconGlobe className="w-4 h-4" />
                        <span className="hidden sm:inline">
                            Prefecture Sort
                        </span>
                    </button>
                </div>
            </div>
            {content}
        </div>
    );
}

function ListItem({
    record,
    index,
    prefectureToRegion,
    regionColorClasses,
}: {
    record: TravelRecord;
    index: number;
    prefectureToRegion?: { [key: string]: string };
    regionColorClasses?: {
        [key: string]: {
            chipBg: string;
            chipBorder: string;
            chipText: string;
            countBg: string;
            countText: string;
            countBorder: string;
        };
    };
}) {
    const region = record.prefecture
        ? prefectureToRegion?.[record.prefecture] || "その他"
        : "その他";
    const colors = regionColorClasses?.[region] || {
        chipBg: "bg-gray-100",
        chipBorder: "border-gray-200",
        chipText: "text-gray-600",
        countBg: "bg-white",
        countText: "text-gray-600",
        countBorder: "border-gray-100",
    };

    return (
        <div
            className="sliding-animation bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            style={{ "--stagger": index } as React.CSSProperties}
        >
            <div className="flex justify-between items-start mb-2">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-600 border border-gray-200">
                            {record.year}
                        </span>
                        <span
                            className={`text-xs font-semibold px-2 py-0.5 rounded ${colors.chipBg} ${colors.chipText} ${colors.chipBorder}`}
                        >
                            {record.prefecture}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                        {record.name}
                    </h3>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex items-center gap-0.5 text-yellow-500">
                        <span className="text-lg font-bold mr-1">
                            {record.rating}
                        </span>
                        <IconStar className="w-4 h-4" filled={true} />
                    </div>
                </div>
            </div>

            <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded border border-gray-100 italic">
                {record.memo}
            </p>

            <div className="mt-3 flex items-center text-xs text-gray-400 gap-1">
                <IconLocation className="w-3 h-3" />
                Lat: {record.coords[0].toFixed(4)}, Lng:{" "}
                {record.coords[1].toFixed(4)}
            </div>
        </div>
    );
}

export default App;