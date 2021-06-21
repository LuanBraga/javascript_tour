const listElement = document.querySelector('#list');
const searchInput = document.querySelector('#search');

let listItems = [
    {
        full_name: 'JavaScript',
        created_at: '2021-06-21T16:00:00Z',
        forks: 420
    },
    {
        full_name: 'JavaScript',
        created_at: '2021-06-21T16:00:00Z',
        forks: 420
    },
    {
        full_name: 'JavaScript',
        created_at: '2021-06-21T16:00:00Z',
        forks: 420
    },
]

function render() {
    let html = '';

    let dateFormat = new Intl.DateTimeFormat('pt-BR')

    listItems.forEach(item => {
        html += `
        <li>
            <div>
                <b>Name: </b> ${item.full_name}
            </div>

            <div>
                <b>Created At: </b> ${item.created_at}
            </div>

            <div>
                <b>Forks: </b> ${item.forks}
            </div>

        </li>`
    });

    return listElement.innerHTML = html;
}

console.log(render())