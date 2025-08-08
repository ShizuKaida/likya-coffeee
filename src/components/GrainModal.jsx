import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'


export default function GrainModal({ isOpen, onClose, bean }) {
  if (!bean) return null

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
  <div className="fixed inset-0 backdrop-blur-sm backdrop-brightness-75 bg-black/30" />
</Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-likya-dark-secondary p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold leading-6 text-likya-orange mb-4"
                >
                  {bean.fullName || bean.name}
                </Dialog.Title>

                <div className="mt-2 text-white text-base space-y-3">
                  {bean.details?.region && <p><strong className="text-likya-orange">Bölge:</strong> {bean.details.region}</p>}
                  {bean.details?.altitude && <p><strong className="text-likya-orange">Yükseklik:</strong> {bean.details.altitude}</p>}
                  {bean.details?.process && <p><strong className="text-likya-orange">İşlem:</strong> {bean.details.process}</p>}
                  {bean.details?.aroma && <p><strong className="text-likya-orange">Aroma:</strong> {bean.details.aroma}</p>}
                  {bean.details?.botanic && <p><strong className="text-likya-orange">Botanik Tür:</strong> {bean.details.botanic}</p>}
                  {bean.details?.body && <p><strong className="text-likya-orange">Gövde:</strong> {bean.details.body}</p>}
                  {bean.details?.acidity && <p><strong className="text-likya-orange">Asidite:</strong> {bean.details.acidity}</p>}
                  {bean.details?.notes && <p><strong className="text-likya-orange">Tadım Notları:</strong> {bean.details.notes}</p>}

                  {bean.details?.extra && (
                    <p className="text-sm text-gray-300 pt-2">
                      {bean.details.extra}
                    </p>
                  )}
                </div>

                <div className="mt-6 text-right">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-likya-orange px-4 py-2 text-sm font-medium text-white hover:bg-likya-orange-light"
                    onClick={onClose}
                  >
                    Kapat
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
