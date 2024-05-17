interface AuthPanelProps {
  newState: (state: string) => void,
  label: string,
  id: string,
  type: string,
}

export default function AuthInput(props: AuthPanelProps) {
  return (
    <div className="flex flex-col justify-between items-start">
      <label htmlFor={props.id}>{props.label}:</label>
      <input type={props.type} id={props.id}
        className="border-gray-400 border-b w-full focus-visible:border-b focus-visible:border-gray-700 focus-visible:outline-none"
        onChange={(e) => props.newState(e.currentTarget.value)}
      />
    </div>
  )
}