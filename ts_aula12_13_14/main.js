//
// Functions
//
function Sum(number1, number2) {
    return number1 + number2;
}
function Fatorial(number) {
    if (number <= 0) {
        return 1;
    }
    return number * Fatorial(number - 1);
}
function CreateUser(username, password, name) {
    if (typeof (name) == undefined) {
        name = username;
        return { username: username, password: password, name: name };
    }
    return { username: username, password: password, name: name };
}
function Login(username, password) {
    if (username === username || password === password) {
        return true;
    }
    return false;
}
