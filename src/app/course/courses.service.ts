
export class CoursesService {

    courses = [
        {id: 1, name: 'Angular'}, {id: 2, name: 'Vue.js'}, {id: 3, name: 'React'}
    ];

    getCourses() {
        // return ['course1', 'course2', 'course3'];
        return this.courses;
    }
}
