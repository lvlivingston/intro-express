const todos = [
    {todo: 'Feed Dogs', done: true},
    {todo: 'Learn Express', done: false},
    {todo: 'Buy Milk', done: false}
];

// we could do this, but we don't want to do this because we need it dynamic
// module.exports = todos;

module.exports = {
    getAll: function() {
        return todos;
    }
};