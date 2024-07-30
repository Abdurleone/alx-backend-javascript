export default function getListStudentsIds(array) {
    if (Array.isArray(array)) return array.map((x) => x.id);
    return [];
}
