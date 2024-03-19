import inquirer from 'inquirer';

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Mis on sinu eesnimi?',
        },
        {
            type: 'number',
            name: 'age',
            message: 'Palun ütle oma vanus numbrites:',
        },
        {
            type: 'confirm',
            name: 'canProceed',
            message: 'Kas oled valmis jätkama või soovid peatuda?',
            default: true,
        },
        {
            type: 'list',
            name: 'theme',
            message: 'Vali oma lemmikteema:',
            choices: ['Öö', 'Päev', 'Vikerkaar'],
        },
        {
            type: 'rawlist',
            name: 'beverage',
            message: 'Vali oma lemmikjook:',
            choices: ['Kohv', 'Tee', 'Mahl'],
        },
        {
            type: 'expand',
            name: 'fruit',
            message: 'Vali üks puuvili järgmistest:',
            choices: [
                {
                    key: 'a',
                    name: 'Ananass',
                    value: 'pineapple',
                },
                {
                    key: 'b',
                    name: 'Banaan',
                    value: 'banana',
                },
                {
                    key: 'k',
                    name: 'Kiivi',
                    value: 'kiwi',
                },
            ],
        },
        {
            type: 'checkbox',
            message: 'Vali või ära vali järgnevad pitsatäidised:',
            name: 'toppings',
            choices: [
                new inquirer.Separator(' -----Lihatooted---- '),
                {
                    name: 'Pepperoni',
                    value: 'pepperoni',
                },
                {
                    name: 'Sink',
                    value: 'ham',
                },
                {
                    name: 'Hakkliha',
                    value: 'groundMeat',
                },
                {
                    name: 'Suitsuspeekon',
                    value: 'bacon',
                },
                new inquirer.Separator(' ----Juustud---- '),
                {
                    name: 'Mozzarella',
                    value: 'mozzarella',
                },
                {
                    name: 'Cheddar',
                    value: 'cheddar',
                },
                {
                    name: 'Parmesan',
                    value: 'parmesan',
                },
            ],
        },
        {
            type: 'password',
            message: 'Palun sisesta enda salasõna:',
            name: 'password',
        },
        {
            type: 'editor',
            name: 'bio',
            value: 'bio',
            message: 'Kirjuta midagi huvitavat enda kohta:',
        },
    ])
    .then((answers) => {
        console.log(answers);
    });