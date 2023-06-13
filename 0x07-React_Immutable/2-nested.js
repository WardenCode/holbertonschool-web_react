export default function accessImmutableObject(object, array) {
    let actual_value = object;

    for (const key of array) {
        if (typeof actual_value !== 'object')
            return undefined;

        actual_value = actual_value[key];
    }

    return actual_value;
}
