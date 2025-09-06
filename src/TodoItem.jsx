import {
  TrashIcon,
  PencilIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";

export default function TodoItem({
  tarea,
  toggleCompleted,
  eliminarTarea,
  editandoId,
  setEditandoId,
  textoEditado,
  setTextoEditado,
  guardarEdicion,
}) {
  const enEdicion = editandoId === tarea.id;

  return (
    <div className="flex items-center gap-3 justify-between border-b border-gray-300 p-3 shadow-sm rounded">
      <div className="flex-1">
        {enEdicion ? (
          <input
            className="w-full p-1 border rounded"
            type="text"
            value={textoEditado}
            onChange={(e) => setTextoEditado(e.target.value)}
          />
        ) : (
          <span
            className={
              tarea.completed ? "line-through text-gray-400" : "text-gray-700"
            }
          >
            {tarea.text}
          </span>
        )}
      </div>

      <input
        className="w-4 h-4"
        type="checkbox"
        checked={tarea.completed}
        onChange={() => toggleCompleted(tarea.id)}
      />

      {enEdicion ? (
        <button onClick={() => guardarEdicion(tarea.id)}>
          <CheckIcon className="w-5 h-5 text-green-500" />
        </button>
      ) : (
        <button
          onClick={() => {
            setEditandoId(tarea.id);
            setTextoEditado(tarea.text);
          }}
        >
          <PencilIcon className="w-5 h-5 text-yellow-500" />
        </button>
      )}

      <button onClick={() => eliminarTarea(tarea.id)}>
        <TrashIcon className="w-5 h-5 text-red-500" />
      </button>
    </div>
  );
}