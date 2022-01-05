/*Config ES Lint and Prettier to working with React*/
//LINK: https://medium.com/how-to-react/config-eslint-and-prettier-in-visual-studio-code-for-react-js-development-97bb2236b31a

//1
/*
Open the terminal in your project root folder and install eslint as a dev dependency. We also need to enable the eslint and prettier extension for the VSCode. So visit the extensions section of VSCode (ctrl + shift + x) and search for Eslint and Prettier — Code formatter and install it.

    npm install eslint --save-dev

 */

//2
/*
After that we will generate our .eslintrc.json file through the terminal so run this command to generate your eslint configuration file.

    npx eslint --init

This will prompt multiple options so, first select To check syntax and find problems after that select JavaScript modules (import/export) then select React Now it will ask Does your project use TypeScript No/Yes In my case, I am not using TypeScript so I will select No option. Now select Browser and then JSON option. It will then prompt you to install eslint-plugin-react so click on yes.

I am currently using React 17.0.1 and It’s currently the latest version of React. In this update, the React Team has made importing React to the file optional. So our eslint is giving an error that"React" must be in scope when using JSX. To fix this we will add a rule to our eslint file. So open your .eslint file and add this line "react/react-in-jsx-scope": "off" inside the rules.

    Add to .eslintrc.json "react/react-in-jsx-scope": "off" in section rules
    "rules"{
      "react/react-in-jsx-scope": "off" 
    }

Now if you open your App.test.js file you will find that eslint is giving us an error that test or expect is not defined . To fix this we need to add "jest": true inside env.

    "env":{
      "browser":true,
      "es2021":true,
      "jest":true
    }

It’s time to add prettier and configure it with our Visual Studio Code so whenever we save our code it will automatically format our code.

*/


//3
/*
Run the below command to install the required plugins for the prettier setup.

      npm install eslint-config-prettier eslint-plugin-prettier prettier --save-dev 

*/

//4
/*
 After installing all the above modules it’s time to add some prettier configuration to our .eslintrc.json file. So add this line "plugin:prettier/recommended" inside extends.

      "extends":[
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
      ]

*/

//5
/*
Now if you open your App.js file and add some extra spaces, the eslint will show you some errors. To fix this we need to click over those errors and press ctrl+. and select fix all auto-fixable problems . This will fix all prettier linting issues automatically.

*/

//6
/*
Now we need to configure our VSCode settings for prettier to work on autosave. Follow the below-mentioned steps to configure your VScode Setting
    - Go to File > Preferences> Settings
    - On your right-hand side, there is an icon to Open Settings in JSON format. Click on that icon.
    - Add below JSON code there

In settings: 
...
    "editor.codeActionsOnSave": { "source.fixAll.eslint": true }, 
    "editor.formatOnSave": true, 
    "eslint.alwaysShowStatus": true, 
    "files.autoSave": "onFocusChange"
...

So now whenever you save your code or change the focus from the code, VSCode will automatically fix the format of your code.
*/