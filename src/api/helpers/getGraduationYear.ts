const getGraduationYear = (idNumber: string) => {
    return `20 + ${idNumber.slice(0,2)}`
}

export default getGraduationYear