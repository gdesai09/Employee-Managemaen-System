import { PencilIcon, Trash2Icon } from "lucide-react";

const EmployeeCard = ({ employee, onDelete, onEdit }) => {
  const handleDelete = async () => {
    const ok = window.confirm("Are you sure you want to delete this employee?");

    if (!ok) return;

    await onDelete(employee._id);
  };

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
      {/* Top Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-slate-100">
            <span className="text-2xl font-semibold text-indigo-500">
              {employee.firstName?.charAt(0)}
              {employee.lastName?.charAt(0)}
            </span>
          </div>
        </div>

        {/* Department Badge */}
        <div className="absolute top-3 left-3 z-10 flex gap-2">
          <span className="rounded-lg bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow backdrop-blur-sm">
            {employee.department || "Remote"}
          </span>

          {employee.isDeleted && (
            <span className="rounded-lg bg-red-500 px-3 py-1 text-xs font-semibold text-white">
              DELETED
            </span>
          )}
        </div>

        {/* Hover Buttons */}
        {!employee.isDeleted && (
          <div className="absolute inset-0 z-20 flex items-end justify-center gap-3 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
            <div className="flex gap-3 pb-6 pointer-events-auto">
              <button
                onClick={() => onEdit(employee)}
                className="rounded-xl bg-white p-2.5 shadow-lg transition hover:scale-105 hover:text-indigo-600"
              >
                <PencilIcon className="h-5 w-5" />
              </button>

              <button
                onClick={handleDelete}
                className="rounded-xl bg-white p-2.5 shadow-lg transition hover:scale-105 hover:text-red-600"
              >
                <Trash2Icon className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900">
          {employee.firstName} {employee.lastName}
        </h3>

        <p className="mt-1 text-sm text-slate-500">{employee.position}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
