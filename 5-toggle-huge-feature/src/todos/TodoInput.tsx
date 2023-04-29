type Props = {
  id: number;
  label: string;
  completed: boolean;
  handleToggle: () => void;
};

export function TodoInput({ id, label, completed, handleToggle }: Props) {
  const formId = `todo-${id}`;
  return (
    <div>
      <label htmlFor={formId}>
        {completed ? <s>{label}</s> : <span>{label}</span>}
        <input
          id={formId}
          type="checkbox"
          checked={completed}
          onChange={handleToggle}
        />
      </label>
    </div>
  );
}
