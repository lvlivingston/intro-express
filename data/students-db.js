const students = [
    {student: 'Jane Smith', attendance: true},
    {student: 'David Jones', attendance: true},
    {student: 'Bill Turner', attendance: false},
    {student: 'Tina Abel', attendance: true},
    {student: 'Laura Grimes', attendance: false},
    {student: 'Tim Wright', attendance: true},
    {student: 'Paula Frank', attendance: true},
];

// we could do this, but we don't want to do this because we need it dynamic
// module.exports = todos;

module.exports = {
    getAll: function() {
        return students;
    }
};