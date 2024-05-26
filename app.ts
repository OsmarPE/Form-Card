const radios = document.querySelectorAll<HTMLInputElement>('.form__radio')
const termsInput = document.querySelector<HTMLInputElement>('#terms')
const form = document.querySelector<HTMLFormElement>('.form')
const alerts = document.querySelector<HTMLDivElement>('.alert')

for (const radio of radios) {
    radio.addEventListener('click', function(){
        radios.forEach(item => item.checked = false)
        this.checked = true
    })

}


form?.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const data = new FormData(e.target as HTMLFormElement)
    const name = data.get('name')
    const last = data.get('last')
    const email = data.get('email')
    const message = data.get('message')
    const terms = data.get('terms') ?? ''
    let type = ''
    let typeObj ={
        type: '',
        id:''
    }
    
    
    radios.forEach(item => item.checked && (typeObj = {type: item.value, id:item.id}) )    
    type = typeObj.type

    const Obj = {name,last,email,message,type,terms}
    

    for (const [key] of Object.entries(Obj)) {
        const query = `#${key}`
        if (key === 'type') { 
            radios[0].parentElement?.parentElement?.lastElementChild?.classList.remove('error')

        }else if(key === 'terms'){
            termsInput?.parentElement?.parentElement?.lastElementChild?.classList.remove('error')
          
        }  
        else{
            document.querySelector(query)?.nextElementSibling?.classList.remove('error')
        }  

    }

    for (const [key,value] of Object.entries(Obj)) {
        const query = `#${key}`
        if (key === 'type' && value === '') { 
            radios[0].parentElement?.parentElement?.lastElementChild?.classList.add('error')
        }else if (key === 'terms' && value === '') { 
            termsInput?.parentElement?.parentElement?.lastElementChild?.classList.add('error')
            

        }else if (value === '') {
            document.querySelector(query)?.nextElementSibling?.classList.add('error')
             
        }
    }

    if (Object.values(Obj).includes('')) return


    form.reset()

    alerts?.classList.add('active')

    setTimeout(() => {
        alerts?.classList.remove('active')
    }, 5000);
})
