export namespace Config {
    export function IsDebug(): boolean {
        return !window.location.href.toLowerCase().includes("github");
    }
    export const IsDM = true;
    //#region URLs
    export const BaseUrl = IsDebug()? "http://127.0.0.1:5500/dnd/" : "https://sethmaxson.github.io/dnd/";
    export const BaseImageUrl = BaseUrl + "img/";
    //#endregion URLs
}