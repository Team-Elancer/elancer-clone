const useConfrim = (message, onConfirm, onReject) => {
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onReject();
    }
  };

  return !onConfirm || typeof onConfirm !== 'function' || !onReject || typeof onReject !== 'function'
    ? undefined
    : confirmAction;
};

export default useConfrim;
