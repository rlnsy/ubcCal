import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = 'savedCourses';

export async function saveCourse(courseCode, courseNo) {

    const checkVal = await AsyncStorage.getItem(STORAGE_KEY);

    if (checkVal == null) {
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(
            [{
                code: courseCode,
                number: courseNo
            }]
        ))
    }

    AsyncStorage.getItem(STORAGE_KEY).then(
        (data) => {
            let currentList = JSON.parse(data);
            let newList = [...currentList, {
                code: courseCode,
                number: courseNo
            }];
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newList)).then(
                () => alert('Course saved!')
            ).catch((error) => alert('error saving'));
        }
    ).catch((error) => {
        alert(error.toString());
    });
}

export async function getCourses() {
    return AsyncStorage.getItem(STORAGE_KEY);
}
