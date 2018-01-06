module ModalRails
    class Ajax

        def matches? request
            request.xhr?
        end

    end
end
