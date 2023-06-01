interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
    [key: string]: any;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "London"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 30,
    location: "Paris"
};

const studentsList: Student[] = [student1, student2];
const labels: string[] = ['firstName', 'lastName'];

const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

document.body.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);

for (const label of labels) {
    const th: HTMLTableCellElement = document.createElement('th');
    th.appendChild(document.createTextNode(label));
    thead.appendChild(th);
}

for (const student of studentsList) {
    const tr: HTMLTableRowElement = document.createElement('tr');
    tbody.appendChild(tr);

    for (const label of labels) {
        const td: HTMLTableCellElement = document.createElement('td');
        td.appendChild(document.createTextNode(student[label]));
        tr.appendChild(td);
    }
}
