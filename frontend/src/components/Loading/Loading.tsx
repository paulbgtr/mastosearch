export const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 border-4 border-gray-400 rounded-full border-t-transparent animate-spin" />
        <span className="font-medium text-gray-500">Loading...</span>
      </div>
    </div>
  );
};
