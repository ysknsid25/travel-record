import React from 'react';

// アイコンコンポーネント（App.tsxと共通化あるいはここで再定義でも良いが、シンプルにここで定義）
const IconExternalLink = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

const IconBook = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>
);

const IconMic = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
        <line x1="12" y1="19" x2="12" y2="23"></line>
        <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
);

export function AboutView() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8 overflow-y-auto h-full pb-20 font-sans text-gray-800">
            
            {/* Section 1: Public Materials */}
            <section className="mb-12">
                <div className="flex items-center gap-3 mb-6 border-b-2 border-indigo-500 pb-2">
                    <IconBook className="w-6 h-6 text-indigo-600" />
                    <h2 className="text-2xl font-bold">公開資料</h2>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-700">2025年10月から</h3>
                        <ul className="list-none space-y-2">
                            <li>
                                <a 
                                    href="https://blog.inorinrinrin.com/archive/category/%E7%99%BB%E5%A3%87%E8%B3%87%E6%96%99" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline group"
                                >
                                    <span>はてなブログ (登壇資料カテゴリ)</span>
                                    <IconExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                        <h3 className="text-lg font-semibold mb-3 text-gray-700">2025年9月まで</h3>
                        <ul className="list-none space-y-2">
                            <li>
                                <a 
                                    href="https://speakerdeck.com/ysknsid25" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline group"
                                >
                                    <span>Speaker Deck</span>
                                    <IconExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-md border border-gray-100 mt-4">
                        <p className="text-sm text-gray-600">
                            その他勉強会の登壇は
                            <a 
                                href="https://connpass.com/user/samurai_se/presentation" 
                                target="_blank" 
                                rel="noreferrer"
                                className="text-blue-600 hover:text-blue-800 hover:underline mx-1 font-medium"
                            >
                                こちら (Connpass)
                            </a>
                            をご覧ください。
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 2: Interview */}
            <section>
                <div className="flex items-center gap-3 mb-6 border-b-2 border-orange-500 pb-2">
                    <IconMic className="w-6 h-6 text-orange-600" />
                    <h2 className="text-2xl font-bold">Interview</h2>
                </div>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-gray-400 mb-4">2024</h3>
                        <div className="grid gap-4">
                            <ArticleCard 
                                title="テストカバレッジが100％でもそれが意味のあるテストかは断言できない　Mutation Testでテストコード自体の検証をしよう"
                                url="https://logmi.jp/main/technology/330791"
                                source="logmi"
                            />
                            <ArticleCard 
                                title="何をテストするか・どのような状況とシナリオか・期待される結果は何か　明日からでもすぐにできるアンチパターン回避メソッド"
                                url="https://logmi.jp/tech/articles/330790"
                                source="logmi"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

function ArticleCard({ title, url, source }: { title: string, url: string, source: string }) {
    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noreferrer"
            className="block group bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-orange-200"
        >
            <div className="flex justify-between items-start gap-4">
                <h4 className="text-base font-bold text-gray-800 group-hover:text-orange-600 leading-snug">
                    {title}
                </h4>
                <IconExternalLink className="w-5 h-5 text-gray-300 group-hover:text-orange-500 flex-shrink-0" />
            </div>
            <div className="mt-3 flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded uppercase tracking-wider group-hover:bg-orange-50 group-hover:text-orange-700">
                    {source}
                </span>
            </div>
        </a>
    );
}
