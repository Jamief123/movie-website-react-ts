export const truncateWithElipsis = (input: string, maxLength: number = 105): string =>  {
    return input.length > maxLength ? `${input.substring(0, maxLength)}...` : input;
}
