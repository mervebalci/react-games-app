interface Props {
  onSelectCategory: (category: string) => void;
}

export default function ExpenseFilter({ onSelectCategory }: Props) {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All categories</option>
      <option value="Grocery">Grocery</option>
      <option value="Utility">Utility</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
}
