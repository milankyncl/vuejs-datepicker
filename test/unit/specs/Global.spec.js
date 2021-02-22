describe('Timezones', () => {
  it('should be UTC for testing purposes', () => {
    /*
     * Please read full discussion on
     * https://stackoverflow.com/questions/56261381/how-do-i-set-a-timezone-in-my-jest-config
     */
    expect(new Date().getTimezoneOffset()).toBe(0)
  })
})
