
const user = {
    name: 'bruno',
    age: 23,
    location: 'califonia'
};

function getLocation() {
    if (location) {
    return <p>location:{location}</p>
    }
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'ananymous'}</h1>
        {(user.age && user.age >= 28) && <p>Age: {user.age}</p> }
        {getLocation(user.location)}
    </div>
)  

const app = {
    title: 'indecison App',
    subtitle: 'some subtitle',
   options: []

};


const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        onRenderOptions();

    }
};

const appRoot = document.getElementById('app');

const onRest = () => {
    app.options = [];
    onRenderOptions();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const onRenderOptions = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ?'here are your options' : 'no options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>what should i do?</button>
            <button onClick={onRest}>Remove All</button>
            
            {/* {
                numbers.map((number) => {
                return <p key={number}>Number:{number}</p>;
                })
            }  */}
             <ol>
               {/* map over app.options getting back an array of list (set key and text*/
               
               app.options.map((item) => {
                return <li key={item}>Item: {item}</li>;
                })
                }
             </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
                
            </form>
        </div>
    );
    
     ReactDOM.render(template, appRoot);
}

onRenderOptions();
 

 