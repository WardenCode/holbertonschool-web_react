interface Teacher {
    firstName: string,
    lastName: string,
    fullNameEmployee: string,
    yearsOfExperience: number,
    location: string,
    [key: string]: any,
}

interface Director extends Teacher {
    numberOfReports: number,
}

interface printTeacher {
    (firstName: string, lastName: string): string
}

const printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName[0]}. ${lastName}`;
};

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return `${this.firstName}`;
    }
}
