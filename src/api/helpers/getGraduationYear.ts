const getGraduationYear = (idNumber: string | number) => {
    return `20${idNumber.toString().slice(0,2)}`
}

export default getGraduationYear