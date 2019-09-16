/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 *
 * This product is licensed to you under the Apache License, Version 2.0 (the "License").
 * You may not use this product except in compliance with the License.
 *
 * This product may include a number of subcomponents with separate copyright notices
 * and license terms. Your use of these subcomponents is subject to the terms and
 * conditions of the subcomponent's license, as noted in the LICENSE file.
 */

package com.vmware.mangle.services.repository;

import java.util.Collection;
import java.util.List;

import org.springframework.data.cassandra.repository.AllowFiltering;
import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.data.cassandra.repository.Query;
import org.springframework.stereotype.Repository;

import com.vmware.mangle.cassandra.model.security.Role;


/**
 *
 *
 * @author chetanc
 */
@Repository
public interface RoleRepository extends CassandraRepository<Role, String> {
    @AllowFiltering
    @Query("SELECT * FROM role WHERE name = ?0")
    Role findByName(String role);

    @Query(value = "SELECT id,name,type,privilegeNames FROM role WHERE name IN ?0", allowFiltering = true)
    public List<Role> findByNameIn(Collection<String> roleNames);
}
