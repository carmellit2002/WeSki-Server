const parseDate = (date) => new Date(date).toLocaleDateString('he-IL').replace(/\D/g,'/')

module.exports = {
    parseDate
};
