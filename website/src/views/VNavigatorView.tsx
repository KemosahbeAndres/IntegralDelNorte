import { el } from "redom"

export class VNavigatorView {
    el: HTMLElement
    constructor(names?: string[]){
        this.el = <ul className="nav flex-column menu"></ul>
        for(let item of names || []){
            let l = item.toLowerCase()
            let link = <a className="nav-link" href="#" >{item}</a>
            link.link = l
            link.addEventListener('click', (e: Event)=>{
                e.preventDefault()
                if(this.onItemClick != undefined) this.onItemClick(e)
            })
            this.el.appendChild(
                <li className="nav-item" >
                    {link}
                </li>
            )
        }
    }
    onItemClick?(event: Event) : void
}