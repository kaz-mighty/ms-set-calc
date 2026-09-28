const langs = ['en', 'jp'] as const;
export type Lang = (typeof langs)[number];

function isLang(lang: string | null): lang is Lang {
    return langs.includes(lang as Lang);
}

const langParam = new URLSearchParams(document.location.search).get('lang');
const lang: Lang = isLang(langParam) ? langParam : 'en';

const textsEn = {
    Weapon: "Weapon",
    Armor: "Armor",
    Shield: "Shield",
    Accessory: "Accessory",
    Pet: "Pet",
    WGT: "WGT",
    exportButton: "Export Collection",
    importButton: "Import Collection",
    exportSuccess: "Collection exported to clipboard.",
    exportError: "Error exporting collection to clipboard.",
    importPrompt: "Paste export below:",
    importError: "Error parsing export: ",
}

const textsJp: typeof textsEn = {
    ...textsEn,
    Weapon: "武器",
    Armor: "防具",
    Shield: "盾",
    Accessory: "装飾",
    Pet: "ペット",
    WGT: "重さ",
    exportButton: "所持状態をエクスポート",
    importButton: "所持状態をインポート",
    exportSuccess: "所持状態をクリップボードにエクスポートしました。",
    exportError: "所持状態をクリップボードにエクスポートする際にエラーが起きました。",
    importPrompt: "ここにエクスポートを貼り付けてください:",
    importError: "エクスポートの解析中にエラーが発生しました: ",
};

export const texts = {
    en: textsEn,
    jp: textsJp,
}[lang];

export default lang;


