import useVM from "../viewModel/vm";

export default function TypeCheckInput() {
  const vm = useVM();

  return (
    <div
      ref={vm.inputRef}
      onClick={() => vm.setInputFocused(true)}
      className={`${
        vm.inputFocused ? "bg-gray-200" : "bg-gray-50"
      } p-4 transition-all duration-200 relative w-[400px] h-[100px]`}
    >
      <input
        onKeyDown={(e) => vm.handleTypeLetter(e.key)}
        type="text"
        className="w-full h-full opacity-0 absolute"
        ref={vm.hiddenInputRef}
      />
      <span className="text-black absolute right-1/2">{vm.currentText}</span>
      <span className="text-gray-500 absolute left-1/2">
        {vm.text.slice(vm.currentText.length)}
      </span>
    </div>
  );
}
