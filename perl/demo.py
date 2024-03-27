def calculate_final_value(initial_investment, annualized_return, years):
    """
    Calculate the final value based on the initial investment, annualized return, and the number of years.

    Args:
        initial_investment (float): The initial amount invested.
        annualized_return (float): The annualized return as a percentage.
        years (float): The number of years the investment is held.

    Returns:
        float: The final value after the investment period.
    """
    annualized_return_decimal = annualized_return / 100
    final_value = initial_investment * (1 + annualized_return_decimal) ** years

    return final_value
    pass


initial_investment = 10000
annualized_return = 5.0
years = 5

final_value = calculate_final_value(initial_investment, annualized_return, years)
print(
    f"""
initial value = ${initial_investment}
annulized     = {annualized_return}%
years         = {years}
final value   = ${final_value:.2f}
      """
)

