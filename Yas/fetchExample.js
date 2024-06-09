// JS invented by Brendan Eich in 1995
// 1.Angular
// 2. React
// 3.Vue
// 4.Node [server]
// 5.Electron
// 6.TypeScript
// IonicFameWork
// nestJs
// ExpressJs
// BackBoneJS
// NextJS
// ECMA - 262;
const Result = fetch("http://localhost:8000/");
const FResult = Result.then((response) => response.json());
FResult.then((response) => console.log(response));
