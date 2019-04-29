var itemizeCourses = function(courseList) {

    let items = []

    for (let i = 0; i < courseList.length; i++) {
        const number = courseList[i]
        items[items.length] = {key: i.toString(), courseNo: number}
    }

    return items;
}
