type User = {
    name: string,
    age: number
}

// Simulating database
const data: User[] = [
    {name: 'Jhon', age: 46},
    {name: 'Pam', age: 25},
    {name: 'Jim', age: 34},
    {name: 'Ada', age: 19}
];

export const User = {
    getAll: (): User[] => {
        return data;
    },

    getUserByName: (name: string): User[] => {
        /*let userData: User;
        for(let i=0; i<data.length(); i++) {
            if(name === data[i].name) {
                userData.name = data[i].name;
                userData.age = data[i].age;
                break;
            }
        }

        if(userData !== undefined) {
            return userData
        }*/
        return data.filter(item => item.name === name);
    }
}