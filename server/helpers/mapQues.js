module.exports = function (obj1, obj2) {
    if (obj2.description) obj1.description = obj2.description;
    if (obj2.employee_id) obj1.employee_id = obj2.employee_id;
    if (obj2.tag) obj1.tag = obj2.tag;
    if (obj2.ques_state) obj1.ques_state = obj2.ques_state;
    if (obj2.answer) obj1.replies.answer = obj2.answer
    if (obj2.employee_id) obj1.replies.employee_is = obj2.employee_id
    if (obj2.likes) obj1.replies.likes = obj2.likes
    if (obj2.dislikes) obj1.replies.dislikes = obj2.dislikes

    return obj1;
}