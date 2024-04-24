/* eslint-disable no-nested-ternary */

import { Container } from './styles';

import Loader from '../../components/Loader';

import InputSearch from './components/InputSearch';
import Header from './components/Header';
import ErrorStatus from './components/ErrorStatus';
import EmptyList from './components/EmptyList';
import SearchNotFound from './components/SearchNotFound';
import ContactsList from './components/ContactsList';

import Modal from '../../components/Modal';
import useHome from './useHome';

export default function Home() {
  const {
    isLoading,
    isDeleteModalVisible,
    isLoadingDelete,
    contactBeingDeleted,
    contacts,
    hasError,
    searchTerm,
    filteredContacts,
    orderBy,
    handleConfirmDeleteContact,
    handleChangeSearchTerm,
    handleTryAgain,
    handleCloseDeleteModal,
    handleToogleOrderBy,
    handleDeleteContact,
  } = useHome();

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {(contacts.length > 0 && !hasError) && (
        <InputSearch
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      )}

      <Header
        hasError={hasError}
        qtyOfContacts={contacts.length}
        qtyOfFilteredContacts={filteredContacts.length}
      />

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}

      {!hasError && (
        <>
          {(contacts.length < 1 && !isLoading) && <EmptyList />}

          {(contacts.length > 0 && filteredContacts.length < 1) && (
            <SearchNotFound searchTerm={searchTerm} />
          )}

        </>
      )}

      <ContactsList
        filteredContacts={filteredContacts}
        orderBy={orderBy}
        onToogleOrderBy={handleToogleOrderBy}
        onDeleteContact={handleDeleteContact}
      />

      <Modal
        danger
        visible={isDeleteModalVisible}
        isLoading={isLoadingDelete}
        title={`Tem certeza que deseja remover o contato "${contactBeingDeleted?.name}"?`}
        confirmLabel="Deletar"
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteContact}
      >
        <p>
          Esta ação não poderá ser desfeita
        </p>
      </Modal>
    </Container>
  );
}
