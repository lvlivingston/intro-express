const students = [
    {student: 'Jane Smith', id: 12345, attendance: true},
    {student: 'David Jones',id: 67891, attendance: true},
    {student: 'Bill Turner', id: 23456, attendance: false},
    {student: 'Tina Abel', id: 78901, attendance: true},
    {student: 'Laura Grimes', id: 02345, attendance: false},
    {student: 'Tim Wright', id: 45678, attendance: true},
    {student: 'Paula Frank', id: 89012, attendance: true},
];

// we could do this, but we don't want to do this because we need it dynamic
// module.exports = todos;

module.exports = {
    getAll: function() {
        return students;
    }
};