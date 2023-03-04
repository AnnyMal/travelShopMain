export class Modal{
    private readonly id: string;
    public static modals: Modal[]=[];

    constructor(id: string=null) {
        const findModal=Modal.modals.find((el) =>{
            return el.id === id;
        })

        if (findModal){
            Modal.removeById(id);
        }

        Modal.modals.push(this);
        console.log(Modal.modals)
        this.id = id ||(Math.random()+ Modal.modals.length.toString())
    }
    public open(template:string):void{
        const divWrap = document.createElement("div");
        divWrap.innerHTML=template;
        divWrap.id=this.id;
        divWrap.setAttribute('modal_id',this.id)
        divWrap.classList.add('modal-element');
        divWrap.addEventListener('click',this.closeModalHandler)

        document.body.appendChild(divWrap)
    }
    public remove (){
        const elem = document.getElementById(this.id) as HTMLElement;
        if (elem){
            elem.removeEventListener('click',this.closeModalHandler)
            elem.parentNode.removeChild(elem)
        }
    }
    public static removeById(id:string){
        let modalId=id;
        const findEl: Modal = Modal.modals.find((el)=>{
            return el.id ===modalId;
        })
        if (findEl){
            findEl.remove();
            Modal.modals=Modal.modals.filter((el)=>{
                return el.id!==modalId;
            })
        }
    }
    private closeModalHandler=(ev:Event)=>{
        const target= ev. target as HTMLElement;
        if (target.classList.contains('close-modal')){
            this.remove()
        }
    }
}
