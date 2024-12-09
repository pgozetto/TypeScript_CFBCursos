interface Course {
        title: string;
        description: string;
        duration: number;
        difficulty: string;
        max_students?: number;

        infoCourse?(): void;
};

interface CookCourse extends Course {
        cooking_level: string;
        ingredients: string[];
        cooking_time: number;
        cooking_method: string;
        instructions: string[];
        preparation_time: number;
        cooking_time_total: number;
};

let course: Course = { title: "Sexo", description: "Em quem eu acredito?", duration: 25, difficulty: "EASY", infoCourse() {
        console.log(course.title, course.description, course.duration, course.difficulty);
},};
