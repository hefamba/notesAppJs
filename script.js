const addBtn = document.getElementById('add')



addBtn.addEventListener('click',()=>addNote('HELLO WORLD'))


function addNote(text = ''){
    let noteEl = document.createElement('div')
    noteEl.classList.add('note')

    let noteTemplate = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash"></i></button>
    </div>

    <div class="main" ${text ? 'hidden' :''}></div>
    <textarea ${text ? '' :'hidden'}></textarea>
    
    `
    noteEl.innerHTML = noteTemplate

   

    const deleteBtn = noteEl.querySelector('.delete')
    const editBtn = noteEl.querySelector('.edit')
    const main = noteEl.querySelector('.main')
    const textArea = noteEl.querySelector('textarea')

    textArea.value = text
    main.innerHTML = marked(text)

    deleteBtn.addEventListener('click',() => {
        noteEl.remove()
    })

    editBtn.addEventListener('click', ()=>{
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener('input', (event)=>{
        const { value }= event.target
        main.innerHTML = marked(value)
    })



document.body.appendChild(noteEl)

}
