export default class Elem {

    #ertek=""
    #szuloElem;
    #divElem;
    #id=0;
    constructor(id, ertek,szuloElem) {
        this.#id=id;
        this.#ertek=ertek;
        this.#szuloElem=szuloElem;
        this.#megjelenit()
        this.#divElem = this.#szuloElem.children("div:last-child") /* egy osztályban a "this" a konkrét objektumpéldányt jelenti, de egy eseménykezelőben function névtelen függvénnyel használva azt a html elemet jelenti, amelyik az eseményt kiváltotta, nyílt függvénnyel használva pedig az objektum példányra mutat*/
        this.#divElem.on("click",()=> {
            console.log(this.#id);
            if (this.#ertek === " ") {
                this.#esemenyTrigger("lepes")
            }
            
        })
    }
    #megjelenit() {
        let txt=`<div><p>${this.#ertek}</p></div>`
        this.#szuloElem.append(txt)
    }

    #esemenyTrigger(esemenyNev) {
        /* Létrehoz egy saját eseményt esemenyNEv neven és átad adatokat saját magáról */
        const e = new CustomEvent(esemenyNev, {detail:this.#id})
        window.dispatchEvent(e)
    }

}