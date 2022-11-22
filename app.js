// --- * ---  Tokens --- * ---
var token_child = 0;

window.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        if(token_child < 50) {
            addTask();
        } else {
            document.querySelector('#newtask input').value = "";
            alert('Maximum items added');
        };
    };
});
document.querySelector("#push").addEventListener('click', () => {
    if(token_child < 50) {
        addTask();
    } else {
        document.querySelector('#newtask input').value = "";
        alert('Maximum items added');
    };
});

function addTask() {
    if(document.querySelector('#newtask input').value.length === 0) {
        alert("Please Enter a Task");
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class='bx bxs-trash'></i>
                </button>
            </div> 
        `;

        token_child++;

        // --- * ---  update Counts Itens --- * ---
        let countsItens = document.querySelector('#qtdItems');
        countsItens.innerHTML = `${token_child}/50`;

        // --- * --- delete Function --- * ---
        var current_tasks = document.querySelectorAll(".delete");
        document.querySelector('#tasks').style.display = "block";
        for(var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();

                // --- * ---  update Counts Itens --- * ---
                token_child--;
                let countsItens = document.querySelector('#qtdItems');
                countsItens.innerHTML = `${token_child}/50`;

                if(token_child < 1) {
                    document.querySelector('#tasks').style.display = "none";
                };
            };
        };
        // var tasks = document.querySelectorAll(".task");
        // for(var i = 0;i < tasks; i++) {
        //     tasks[i].onclick = function() {
        //         this.classList.toggle('completed');
        //     };
        // };

        document.querySelector('#newtask input').value = "";
    };
};

function deleteAllChlid() {
    var current_tasks = document.querySelectorAll(".task");
    current_tasks.forEach(element => {
        element.parentElement.removeChild(element);
    });

    // --- * ---  update Counts Itens --- * ---
    token_child = 0;
    let countsItens = document.querySelector('#qtdItems');
    countsItens.innerHTML = `${token_child}/50`;

    document.querySelector('#tasks').style.display = "none";
};


// --- * --- configs_tasks --- * ---
function settingsBtn() {
    let configs_tasks = document.querySelector('#show_Settings');
    configs_tasks.style.marginTop = "0";
    configs_tasks.style.display = "flex";
};

function hidden_settings() {
    let configs_tasks = document.querySelector('#show_Settings');
    configs_tasks.style.marginTop = "-100%";
    configs_tasks.style.display = "flex";
};

// --- * --- Function Options Settings --- * ---
document.querySelector('#ch1').addEventListener('click', () => {
    let body = document.querySelector("body");
    if(body.style.backgroundColor === "#fefefe") {
        body.style.backgroundColor = "#000";
    } else {
        body.style.backgroundColor = "#fefefe"
    };
});

document.querySelector('#ch2').addEventListener('click', () => {
    console.log('Hello');
});

document.querySelector('#ch3').addEventListener('click', () => {
    console.log('Hello');
});

document.querySelector('#ch4').addEventListener('click', () => {
    console.log('Hello');
});